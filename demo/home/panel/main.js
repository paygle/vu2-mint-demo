define([
  'vue',
  'text!demo/home/panel/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('Panel', {
  template: tpl,
  componentName: 'Panel',
  data(){
    return {}
  }
});

});
