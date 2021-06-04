import { ElButton, ElSelect } from 'element-plus';

export default (app: any) => {
    app.config.globalProperties.$ELEMENT = { size: 'small', zIndex: 3000 }
    app.component(ElButton.name, ElButton);
    app.component(ElSelect.name, ElSelect);
}