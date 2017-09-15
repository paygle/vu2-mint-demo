define([
  'vue',
  'text!demo/select/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PageSelect', {
  template: tpl,
  data: function(){
    return {
      select: ''
    };
  }
  
});

});
