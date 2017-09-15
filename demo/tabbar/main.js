define([
  'vue',
  'text!demo/tabbar/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PageTabbar', {
  template: tpl,
  data: function(){
    return {
      selected: '外卖'
    };
  }
  
});

});
