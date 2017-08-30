/** Public 入口模块JS处理 */
define([
  'vue',
  'MINT',
  'components/welcome/main'
], function(Vue, MINT) {
  'use strict';
  Vue.use(MINT); //使用框架组件

  new Vue({
    el:'#main-body'
  });
 
});