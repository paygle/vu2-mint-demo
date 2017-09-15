define([
  'vue',
  'text!demo/panel/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PagePanel', {
  template: tpl,
  componentName: 'Panel',
  data: function(){
    return {}
  }
});

});
