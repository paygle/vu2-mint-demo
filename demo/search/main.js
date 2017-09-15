define([
  'vue',
  'text!demo/search/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PageSearch', {
  template: tpl,
  data: function(){
    return {
      value: '',
      defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ]
    };
  },
  
  computed: {
    filterResult: function() {
      var that = this;
      var result = this.defaultResult.filter(function(value) {
        return new RegExp(that.value, 'i').test(value);
      });
      return result;
    }
  }
  
});

});
