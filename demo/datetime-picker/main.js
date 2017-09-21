define([
  'vue',
  'MINT',
  'text!demo/datetime-picker/main.tpl'
], function(Vue, MINT, tpl) {
  'use strict';

return Vue.component('PageDatetimePicker', {
  template: tpl,
  data: function(){
    return {
      value: '2010-08-08 13:13',
      value2: '2018-07-08',
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
      console.log(
        'value:', this.value, 
        'value2:', this.value2,
        'value3:', this.value3,
        'value4:', this.value4,
        'value5:', this.value5
      );
    }
  }
  
});

});
