<template>
  <div class="gantt">
    <div class="gantt-no" ref="ganttRef"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import Dayjs from 'dayjs';

export default defineComponent({
  setup() {
    const ganttRef = ref<HTMLElement | null>(null);
    const tasks = {
      data: [
        { id: 1, text: '任务 1', start_date: '17-10-2021', duration: 3, progress: 0.6 },
        { id: 2, text: '任务 2', start_date: '20-10-2021', duration: 10, progress: 0.4 }
      ],
      links: []
    };
    onMounted(() => {
      if (ganttRef.value) {
        // gantt.config.xml_date = '%Y-%m-%d';
        // gantt.config.date_scale = '%Y-%m';
        gantt.config.show_links = false;
        gantt.config.drag_progress = false;
        gantt.config.scale_height = 90;
        var weekScaleTemplate = function (date: any) {
          // 可以时使用dayjs 处理返回
          console.log('date', date);
          var dateToStr = gantt.date.date_to_str('%d %M');
          var endDate = gantt.date.add(gantt.date.add(date, 1, 'week'), -1, 'day');
          // 处理一下月份
          return dateToStr(date) + ' - ' + dateToStr(endDate);
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
            width: 200,
            align: 'center',
            template: function (obj: any) {
              return obj.start_date;
            }
          },
          {
            name: 'add',
            label: '',
            width: 60,
            align: 'center',
            template: function (obj: any) {
              return obj.start_date;
            }
          }
        ];
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
        gantt.config.duration_unit = 'day';
        gantt.config.duration_step = 1;
        gantt.plugins({
          tooltip: true,
          marker: true
        });
        gantt.addMarker({
          start_date: new Date(),
          text: '今日'
        });
        gantt.templates.tooltip_text = function (start, end, task) {
          return '<b>Task:</b> ' + task.text + '<br/><b>Duration:</b> ' + task.duration;
        };
        gantt.init(ganttRef.value);
        gantt.parse(tasks);
      }
    });
    return {
      ganttRef
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
