define([
  'vue',
  'text!demo/action-sheet/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('Button', {
  template: tpl
});

});
