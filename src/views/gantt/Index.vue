<template>
  <div class="gantt">
    <div class="gantt-no" ref="ganttRef"></div>
    <el-dialog title="提示" v-model="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
    <transition name="el-fade-in-linear">
      <Menu :x="menuX" :y="menuY" v-show="menuVisible" @menu-item="handleItemClick" />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import Dayjs from 'dayjs';
import Menu from './Menu.vue';

export default defineComponent({
  components: {
    Menu
  },
  setup() {
    const ganttRef = ref<HTMLElement | null>(null);
    const dialogVisible = ref<boolean>(false);
    const menuVisible = ref<boolean>(false);
    const menuX = ref<number>(0);
    const menuY = ref<number>(0);
    const handleItemClick = (item: any) => {
      menuVisible.value = false;
      dialogVisible.value = true;
    };
    const handleClose = (done: any) => {
      done();
    };
    const tasks = {
      data: [
        { id: 1, text: '任务 1', start_date: '2021-10-17', duration: 3, progress: 0.6 },
        { id: 2, text: '任务 2', start_date: '2021-10-20', duration: 10, progress: 0.4 }
      ]
    };
    onMounted(() => {
      if (ganttRef.value) {
        gantt.config.xml_date = '%Y-%m-%d';
        gantt.config.show_links = false;
        gantt.config.drag_progress = false;
        gantt.config.scale_height = 90;
        gantt.config.duration_unit = 'day';
        gantt.config.duration_step = 1;
        var weekScaleTemplate = function (date: any) {
          const mouthMap: { [key: string]: string } = {
            Jan: '一月',
            Feb: '二月',
            Mar: '三月',
            Apr: '四月',
            May: '五月',
            Jun: '六月',
            Jul: '七月',
            Aug: '八月',
            Sept: '九月',
            Oct: '十月',
            Nov: '十一月',
            Dec: '十二月'
          };
          // 可以时使用dayjs 处理返回
          var dateToStr = gantt.date.date_to_str('%d');
          var mToStr = gantt.date.date_to_str('%M');
          var endDate = gantt.date.add(gantt.date.add(date, 1, 'week'), -1, 'day');
          console.log(mToStr(date));
          // 处理一下月份
          return `${dateToStr(date)} 号 - ${dateToStr(endDate)} 号 (${
            mouthMap[mToStr(date) as string]
          })`;
        };
        var dayFormat = function (date: any) {
          const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
          return weeks[Dayjs(date).day()];
        };
        gantt.config.scales = [
          { unit: 'year', step: 1, format: '%Y' },
          { unit: 'week', step: 1, format: weekScaleTemplate },
          { unit: 'day', step: 1, format: dayFormat }
        ];
        gantt.config.columns = [
          {
            name: 'text',
            label: '任务名称',
            tree: true,
            width: '*',
            align: 'left',
            template: function (obj: any) {
              return obj.text;
            }
          },
          {
            name: 'start_date',
            label: '时间',
            width: '*',
            align: 'center',
            template: function (obj: any) {
              return obj.start_date;
            }
          },
          {
            name: 'progress',
            label: '进度',
            width: '*',
            align: 'center',
            template: function (obj: any) {
              return `${obj.progress * 100}%`;
            }
          }
        ];
        gantt.attachEvent(
          'onEmptyClick',
          function (e) {
            //any custom logic here
            menuVisible.value = false;
          },
          {}
        );
        gantt.attachEvent(
          'onContextMenu',
          function (taskId, linkId, event) {
            var x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
              y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            // 判断要是在树上的右键菜单才有效果
            if (taskId && event.target.className === 'gantt_tree_content') {
              console.log('task ContentMenu', taskId, linkId, event);
              menuX.value = x;
              menuY.value = y;
              menuVisible.value = true;
            }

            if (taskId || linkId) {
              return false;
            }

            return true;
          },
          {}
        );
        gantt.attachEvent(
          'onBeforeLightbox',
          function (id) {
            var task = gantt.getTask(id);
            console.log(1);
            task.my_template =
              "<span id='title1'>Holders: </span>" +
              task.users +
              "<span id='title2'>Progress: </span>" +
              task.progress * 100 +
              ' %';
            return false;
          },
          {}
        );
        gantt.attachEvent(
          'onTaskDblClick',
          function (id, e) {
            console.log('id', id, e);
            dialogVisible.value = true;
            return false;
          },
          {}
        );
        gantt.plugins({
          marker: true
        });
        gantt.addMarker({
          start_date: new Date(),
          text: '今日'
        });
        gantt.init(ganttRef.value);
        gantt.parse(tasks);
        gantt.addTask(
          {
            id: 10,
            text: 'Task #5',
            start_date: '2021-10-19',
            duration: 4,
            progress: 0.6
          },
          1,
          1
        );
        gantt.eachTask((task) => {
          task.$open = true;
        });
        gantt.render();
      }
    });
    return {
      ganttRef,
      dialogVisible,
      handleClose,
      menuY,
      menuX,
      menuVisible,
      handleItemClick
    };
  }
});
</script>

<style lang="less" scoped>
.gantt {
  width: 100%;
  height: 100%;
  .gantt-no {
    height: 100%;
  }
}
</style>
