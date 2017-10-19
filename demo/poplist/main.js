define([
  'vue',
  'MINT',
  'text!demo/poplist/main.tpl'
], function(Vue, MINT, tpl) {
  'use strict';

return Vue.component('PagePoplist', {
  template: tpl,
  data: function() {
    return {
      isOpen1: false,
      isOpen2: false,
      content1: '',
      content2: '',
      defaultResult: [
        {name: 'Apple'},
        {name: 'Banana'},
        {name: 'Orange'},
        {name: 'Durian'},
        {name: 'Lemon'},
        {name: 'Peach'},
        {name: 'Cherry'},
        {name: 'Berry'},
        {name: 'Core'},
        {name: 'Fig'},
        {name: 'Haw'},
        {name: 'Melon'},
        {name: 'Plum'},
        {name: 'Pear'},
        {name: 'Peanu'},
        {name: 'Other'}
      ]
      // ,defaultResult: [
      //   'Apple',
      //   'Banana',
      //   'Orange',
      //   'Durian',
      //   'Lemon',
      //   'Peach',
      //   'Cherry',
      //   'Berry',
      //   'Core',
      //   'Fig',
      //   'Haw',
      //   'Melon',
      //   'Plum',
      //   'Pear',
      //   'Peanu',
      //   'Other'
      // ]
    };
  },
  methods: {
    log: function(s) {
      console.log('Scope:', s);
    },

    selectChanged1: function(item) {
      this.content1 = item.name || item;
    },
    selectChanged2: function(item) {
      this.content2 = item.name || item;
    },
    changePop1: function() {
      this.isOpen1 = true;
    },
    changePop2: function() {
      this.isOpen2 = true;
    }
  }
  
});

});
