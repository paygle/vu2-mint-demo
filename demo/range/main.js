define([
  'vue',
  'text!demo/range/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PageRange', {
  template: tpl,
  data: function(){
    return {
      value1: 0,
      value2: 20,
      value3: 0,
      value4: 0,
      value5: 10,
      value6: 0,
      value7: 40,
      value8: 14,
      cells1: null,
      cells2: null,
      cells3: null
    };
  },
  
  mounted() {
    this.cells1 = [{
      title: '默认',
      value: this.value1
    }, {
      title: '预设 value',
      value: this.value2
    }, {
      title: '左右文字',
      value: this.value3,
      start: '0',
      end: '100'
    }];
    this.cells2 = [{
      title: '定义步长',
      value: this.value4,
      step: 10
    }, {
      title: '定义区间',
      value: this.value5,
      start: '10',
      end: '90',
      min: 10,
      max: 90
    }, {
      title: '定义线宽',
      value: this.value6,
      barHeight: 5
    }, {
      title: '置为无效',
      value: this.value7,
      disabled: true
    }];
    this.cells3 = [{
      title: '字体大小',
      value: this.value8,
      start: '14',
      end: '22',
      min: 14,
      max: 22,
      step: 2
    }];
  }
  
});

});
