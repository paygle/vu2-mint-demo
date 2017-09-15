define([
  'vue',
  'text!demo/popup/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PagePopup', {
  template: tpl,
  data: function(){
    return {
      popupVisible1: false,
      popupVisible2: false,
      popupVisible3: false,
      popupVisible4: false,
      buttonBottom: 0,
      dateSlots: [
        {
          flex: 1,
          values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    };
  },
  
  watch: {
    popupVisible2: function(val) {
      if (val) {
        var that = this;
        setTimeout(function(){
          that.popupVisible2 = false;
        }, 2000);
      }
    }
  },

  methods: {
    onDateChange: function(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
      this.dateStart = values[0];
      this.dateEnd = values[1];
    }
  },

  mounted: function() {
    this.buttonBottom = this.$refs.button.$el.getBoundingClientRect().bottom;
  }
  
});

});
