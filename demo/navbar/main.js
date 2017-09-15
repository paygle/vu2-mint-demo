define([
  'vue',
  'text!demo/navbar/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PageNavbar', {
  template: tpl,
  data: function(){
    return {
      selected: '1'
    };
  }
  
});

});
