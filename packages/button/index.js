import Button from './src/button.vue';
// 为组件提供 install 安装方法，供按需引入
Button.install = function (Vue) {
  console.log('== > 按需加载 Button < ==');
  Vue.component(Button.name, Button);
};
export default Button;
