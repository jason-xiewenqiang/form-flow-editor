<template>
  <div class="table">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    <el-table
      :data="[]"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <table id="table-view" border="1" cellspacing="0">
      <tbody>
        <tr>
          <td colspan="3" style="height: 60px;"></td>
          <td colspan="19" style="height: 60px;font-weight: bold;font-size: 20px;">交接班记录</td>
          <td colspan="4" style="height: 60px;"></td>
        </tr>
        <tr>
          <td rowspan="2" style="height: 45px;font-weight: 800;width: 3%;">巡检项目交接</td>
          <td colspan="8" style="height: 45px;font-weight: 800;">配电系统</td>
          <td colspan="9" style="height: 45px;font-weight: 800;">暖通系统</td>
          <td colspan="3" style="height: 45px;font-weight: 800;">监控系统</td>
          <td colspan="5" style="height: 45px;font-weight: 800;">实物交接</td>
        </tr>
        <tr>
          <td colspan="1" style="height: 60px;width: 5%;">直流屏</td>
          <td colspan="1" style="height: 60px;width: 3%;">高压配电系统</td>
          <td colspan="1" style="height: 60px;width: 3%;">低压配电系统</td>
          <td colspan="1" style="height: 60px;width: 3%;">柴油发电机组</td>
          <td colspan="1" style="height: 60px;width: 3%;">变压器</td>
          <td colspan="1" style="height: 60px;width: 3%;">UPS系统</td>
          <td colspan="1" style="height: 60px;width: 3%;">开关电源系统</td>
          <td colspan="1" style="height: 60px;width: 3%;">蓄电池组</td>

          <td colspan="1" style="height: 60px;width: 3%;">冷水机组</td>
          <td colspan="1" style="height: 60px;width: 3%;">冷却塔</td>
          <td colspan="1" style="height: 60px;width: 3%;">循环水泵</td>
          <td colspan="1" style="height: 60px;width: 3%;">冷站其他设备</td>
          <td colspan="1" style="height: 60px;width: 5%;">官网系统</td>
          <td colspan="1" style="height: 60px;width: 3%;">末端空调</td>
          <td colspan="1" style="height: 60px;width: 3%;">板式换热器</td>
          <td colspan="1" style="height: 60px;width: 3%;">蓄冷罐</td>
          <td colspan="1" style="height: 60px;width: 3%;">恒温恒湿机</td>

          <td colspan="1" style="height: 60px;width: 3%;">电力监控</td>
          <td colspan="1" style="height: 60px;width: 3%;">BA系统</td>
          <td colspan="1" style="height: 60px;width: 3%;">动环监控</td>

          <td colspan="1" style="height: 60px;width: 3%;">对讲机</td>
          <td colspan="1" style="height: 60px;width: 3%;">值班系统</td>
          <td colspan="1" style="height: 60px;width: 3%;">钥匙</td>
          <td colspan="1" style="height: 60px;width: 3%;">其他运维工具</td>
          <td colspan="1" style="height: 60px;width: 3%;">运维文件</td>
        </tr>
        <tr>
          <td colspan="1" style="height: 45px;font-weight: 800;">状态</td>
          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>

          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>

          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>

          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;"></td>
        </tr>
        <tr>
          <td rowspan="2" style="font-weight: 800;">接班时设备运行情况</td>
          <td rowspan="2" style="font-weight: 800;">配电系统</td>
          <td colspan="1" style="height: 45px;font-weight: 800;">高压</td>
          <td colspan="10" style="height: 45px;font-weight: 800;"></td>
          <td rowspan="2" style="font-weight: 800;">暖通系统</td>
          <td colspan="1" style="height: 45px;font-weight: 800;">制冷</td>
          <td colspan="11" style="height: 45px;"></td>
        </tr>
        <tr>
          <td colspan="1" style="height: 45px;font-weight: 800;">低压</td>
          <td colspan="10" style="height: 45px;"></td>
          <td colspan="1" style="height: 45px;font-weight: 800;">空调</td>
          <td colspan="11" style="height: 45px;"></td>
        </tr>
        <tr>
          <td colspan="1" style="height: 120px;font-weight: 800;">班中设备操作</td>
          <td colspan="1" style="height: 120px;font-weight: 800;">配电</td>
          <td colspan="11" style="height: 120px;"></td>
          <td colspan="1" style="height: 120px;font-weight: 800;">暖通</td>
          <td colspan="12" style="height: 120px;"></td>
        </tr>
        <tr>
          <td colspan="1" style="height: 80px;font-weight: 800;">班中工作内容</td>
          <td colspan="12" style="height: 80px;"></td>
          <td colspan="1" style="height: 80px;font-weight: 800;">值班交接事项记录</td>
          <td colspan="12" style="height: 80px;"></td>
        </tr>
        <tr>
          <td colspan="7" style="height: 45px;font-weight: 800;">交班值班员(签名)</td>
          <td colspan="6" style="height: 45px;"></td>
          <td colspan="7" style="height: 45px;font-weight: 800;">接班值班员(签名)</td>
          <td colspan="8" style="height: 45px;"></td>
        </tr>
        <tr>
          <td colspan="7" style="height: 45px;font-weight: 800;">交班值班班长(签名)</td>
          <td colspan="6" style="height: 45px;"></td>
          <td colspan="7" style="height: 45px;font-weight: 800;">接班值班班长(签名)</td>
          <td colspan="8" style="height: 45px;"></td>
        </tr>
        <tr>
          <td
            colspan="26"
            style="text-align: left;box-sizing: border-box;padding: 10px;font-size: 14px;"
          >
            备注:
            <p style="text-indent: 20px;margin: 0;">1、交接班必须面对面交接，交班值班员填写交接时的设备运行状态及实物状况；</p>
            <p
              style="text-indent: 20px;margin: 0;"
            >2、前一班交接事项由交班值班员填写当班期间的文档归档情况、异常情况、遗留工作、上一班未完事项的完成情况；</p>
            <p style="text-indent: 20px;margin: 0;">3、值班长在检查完值班员接班情况后签字确认；</p>
            <p style="text-indent: 20px;margin: 0;">4、运行主管应每天对交接班及记录进行检查、核实。</p>
          </td>
        </tr>
      </tbody>
    </table>
    <el-button @click="print" v-show="show">打印</el-button>
    <el-button @click="toCanvasPNG('png')" v-show="show">下载成PNG</el-button>
    <el-button @click="toCanvasPNG('jpeg')" v-show="show">下载成JPG</el-button>
    <el-button @click="downloadExcel" v-show="show">下载原文件</el-button>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import html2canvas from 'html2canvas'

export default defineComponent({
  setup() {
    console.log('table')
    const show = ref(true)
    const afterPrint = () => {
      console.log('shit')
      show.value = true
    }
    const beforePrint = () => {
      console.log('before')
    }
    if (window.matchMedia) {
      var mediaQueryList = window.matchMedia('print')
      mediaQueryList.addListener((mql) => {
        if (mql.matches) {
          beforePrint()
        } else {
          afterPrint()
        }
      })
    }
    const print = () => {
      console.log('print')
      show.value = false
      setTimeout(() => {
        window.print()
      })
    }
    const downloadExcel = async () => {
      const el = document.createElement('a')
      el.download = decodeURI('值班交接表.xlsx')
      el.style.display = 'none'
      el.href = './table.xlsx'
      document.body.appendChild(el)
      el.click()
      document.body.removeChild(el)
    }
    const downLoad = (url: string) => {
      const oA = document.createElement('a')
      oA.download = '交接班' // 设置下载的文件名，默认是'下载'
      oA.href = url
      document.body.appendChild(oA)
      oA.click()
      oA.remove() // 下载之后把创建的元素删除
    }
    const toCanvasPNG = (type: string) => {
      html2canvas(document.getElementById('table-view') as HTMLElement).then(function (canvas) {
        const url = canvas.toDataURL(`image/${type}`)
        downLoad(url)
      })
    }
    const value1 = ref('')
    const  tableData = [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]

    return {
      print,
      show,
      downloadExcel,
      toCanvasPNG,
      value1,
      tableData
    }
  }
})
</script>
<style lang="less" scoped>
.table {
  width: 100%;
  table {
    text-align: center;
    width: 100%;
  }
}
</style>
