define([
  'vue',
  'text!demo/checklist/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('Checklist', {
  template: tpl,
  data: function() {
    return {
      value1: [],
      value2: ['选中禁用的值'],
      value3: ['选项A'],
      value4: []
    };
  },

  created: function() {
    this.options1 = ['选项A', '选项B', '选项C'];
    this.options3 = ['选项A', '选项B', '选项C', '选项D'];
    this.options4 = ['选项A', '选项B', '选项C', '选项D'];
    this.options2 = [
      {
        label: '被禁用',
        value: '值F',
        disabled: true
      },
      {
        label: '选中禁用',
        value: '选中禁用的值',
        disabled: true
      },
      {
        label: '选项A',
        value: '值A'
      },
      {
        label: '选项B',
        value: '值B'
      }
    ];
  }
  
});

});
