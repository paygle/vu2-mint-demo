
define([
  'vue',
  'text!demo/collapse/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PageCollapse', {
  template: tpl,
  data: function(){
    return {
      collapse: [0]
    };
  },
  methods: {
    modify: function() {
      this.collapse = [1, 2];
    }
  }
  
});

});
