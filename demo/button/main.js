define([
  'vue',
  'text!demo/button/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PageButton', {
  template: tpl
});

});
