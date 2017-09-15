define([
  'vue',
  'text!demo/spinner/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PageSpinner', {
  template: tpl
});

});
