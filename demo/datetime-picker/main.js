define([
  'vue',
  'text!demo/datetime-picker/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('DatetimePicker', {
  template: tpl,
  data: function(){
    return {
      value: null,
      value2: null,
      value3: null,
      value4: null,
      value5: '04:32',
      visible: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false
    };
  },

  methods: {
    open: function(picker) {
      this.$refs[picker].open();
    },

    handleChange: function(value) {
      MINT.Toast({
        message: '已选择 ' + value.toString(),
        position: 'bottom'
      });
    }
  }
  
});

});
