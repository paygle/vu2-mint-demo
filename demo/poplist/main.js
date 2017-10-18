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
      isOpen: false,
      content: '',
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
    selectChanged: function(item) {
      this.content = item.name || item;
    },
    log: function(s) {
      console.log('Scope:', s);
    },
    changePop: function() {
      this.isOpen = !this.isOpen;
    }
  }
  
});

});
