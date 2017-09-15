define([
  'vue',
  'MINT',
  'text!demo/message-box/main.tpl'
], function(Vue, MINT, tpl) {
  'use strict';

return Vue.component('PageMessageBox', {
  template: tpl,
  methods: {
    openAlert: function() {
      MINT.MessageBox.alert('操作成功!', '提示');
    },

    openConfirm: function() {
      MINT.MessageBox.confirm('确定执行此操作?', '提示');
    },

    openPrompt: function() {
      MINT.MessageBox.prompt(' ', '请输入姓名').then(function(o){

        // o.action =  confirm | 
        if (o.value) {
          MessageBox.alert(`你的名字是 ${ value }`, '输入成功');
        }
      });
    }
  }
  
});

});
