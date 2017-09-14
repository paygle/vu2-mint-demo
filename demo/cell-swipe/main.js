define([
  'vue',
  'text!demo/cell-swipe/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('CellSwipe', {
  template: tpl,
  created: function() {
    this.rightButtons = [
      {
        content: 'Mark as Unread',
        style: { background: 'lightgray', color: '#fff' }
      },
      {
        content: 'Delete',
        style: { background: 'red', color: '#fff' },
        handler: function (){ this.$messagebox('delete') }
      }
    ];
  },

  methods: {
    leftButtonHandler: function(evt) {
      console.log(123);
    }
  }
  
});

});
