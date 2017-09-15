define([
  'vue',
  'MINT',
  'text!demo/cell-swipe/main.tpl'
], function(Vue, MINT, tpl) {
  'use strict';

return Vue.component('PageCellSwipe', {
  template: tpl,
  created: function() {
    var that = this;
    this.rightButtons = [
      {
        content: 'Mark as Unread',
        style: { background: 'lightgray', color: '#fff' }
      },
      {
        content: 'Delete',
        style: { background: 'red', color: '#fff' },
        handler: function (){ 
          that.$messagebox('delete') 
        }
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
