define([
  'vue',
  'text!demo/radio/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PageRadio', {
  template: tpl,
  data: function(){
    return {
      value1: '',
      value2: '值A',
      value3: ''
    };
  },
  
  created: function() {
    this.options1 = ['选项A', '选项B', '选项C'];
    this.options3 = ['选项A', '选项B', '选项C'];
    this.options2 = [
      {
        label: '被禁用',
        value: '值F',
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
