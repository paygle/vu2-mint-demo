
define([
  'vue',
  'text!demo/collapse/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('Collapse', {
  template: tpl,
  data: function(){
    return {
      collapse: [0]
    };
  }
  
});

});
