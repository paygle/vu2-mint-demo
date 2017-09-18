define([
  'vue',
  'text!demo/circle-step/main.tpl'
], function(Vue, tpl) {
  'use strict';
/**
 * mo-circle-step 组件属性
  steps [Number]   5         // 进度数
  height [Number]  28        // 高度
  boxSize [Number] 0.8        // 圆高比值
  setting [Array]             // 背景和颜色
  [{ background: '#ccc', color: '#000', activedbg: '#00f', activedColor: '#fff' } ]

  lineWidth [Number] 1        // 线条宽度
  lineColor [String] '#ccc'   // 线条颜色
  links [Array] Array         // 各Step链接地址
  isLink [Boolean]            // 是否链接点击有效
 */

return Vue.component('PageCircleStep', {
  template: tpl,
  data: function() {
    return {
      steps: 5,
      actived: 1,
      links: [
        '/',
        '/bb'
      ]
    };
  },
  
  methods: {
    cirecleClick: function(index) {
      console.log('cirecleClick', index);
    }
  }
});

});
