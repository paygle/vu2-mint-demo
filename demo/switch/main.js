define([
  'vue',
  'text!demo/switch/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PageSwitch', {
  template: tpl,
  data: function(){
    return {
      value1: '开森',
      value2: 1,
      value3: true,
      value4: 'off'
    };
  },
  
  methods: {
    handleChange: function(event) {
      console.log(event);
    }
  }
  
});

});
