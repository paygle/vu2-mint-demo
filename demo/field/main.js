define([
  'vue',
  'text!demo/field/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('Field', {
  template: tpl
});

});
