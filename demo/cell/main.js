define([
  'vue',
  'text!demo/cell/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('Cell', {
  template: tpl
});

});
