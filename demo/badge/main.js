define([
  'vue',
  'text!demo/badge/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PageBadge', {
  template: tpl
});

});
