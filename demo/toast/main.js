define([
  'vue',
  'MINT',
  'text!demo/toast/main.tpl'
], function(Vue, MINT, tpl) {
  'use strict';

return Vue.component('PageToast', {
  template: tpl,
  methods: {
    openToast: function() {
      MINT.Toast('提示信息');
    },

    openToastWithIcon: function() {
      MINT.Toast({
        message: '操作成功',
        iconClass: 'mintui mintui-success'
      });
    },

    openBottomToast: function() {
      MINT.Toast({
        message: '提示信息',
        position: 'bottom'
      });
    }
  }
  
});

});
