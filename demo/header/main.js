define([
  'vue',
  'text!demo/header/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('Header', {
  template: tpl,
  methods: {
    handleClose: function() {
      alert('close this page');
    }
  }
  
});

});
