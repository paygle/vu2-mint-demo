define([
  'vue',
  'text!demo/tab-container/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PageTabContainer', {
  template: tpl,
  data: function(){
    return {
      active: 'tab-container1'
    };
  }
  
});

});
