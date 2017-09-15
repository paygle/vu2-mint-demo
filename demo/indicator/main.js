define([
  'vue',
  'MINT',
  'text!demo/indicator/main.tpl'
], function(Vue, MINT, tpl) {
  'use strict';

return Vue.component('PageIndicator', {
  template: tpl,
  methods: {
    openIndicator: function() {
      MINT.Indicator.open();
      setTimeout(function(){ Indicator.close() }, 2000);
    },

    openIndicatorWithSpinner: function() {
      MINT.Indicator.open({ spinnerType: 'fading-circle' });
      setTimeout(function(){ MINT.Indicator.close() }, 2000);
    },

    openIndicatorWithText: function() {
      MINT.Indicator.open('加载中...');
      setTimeout(function(){ MINT.Indicator.close() }, 2000);
    }
  },

  beforeDestroy: function() {
    MINT.Indicator.close();
  }
  
});

});
