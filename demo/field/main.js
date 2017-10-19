define([
  'vue',
  'text!demo/field/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PageField', {
  template: tpl,
  data: function() {
    return {
      value: 'a'
    };
  },
  methods: {
    translate: function(setText, value) {
      setText('这是翻译内容');
    }
  }
});

});
