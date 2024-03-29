import { ElButton, ElSelect, ElDatePicker, ElTable, ElTableColumn } from 'element-plus'

export default (app: any) => {
  app.config.globalProperties.$ELEMENT = { size: 'small', zIndex: 3000 }
  app.component(ElButton.name, ElButton)
  app.component(ElSelect?.name, ElSelect)
  app.component(ElDatePicker?.name, ElDatePicker)
  app.component(ElTable?.name, ElTable)
  app.component(ElTableColumn?.name, ElTableColumn)
}
