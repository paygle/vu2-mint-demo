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
      loading: false,
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
      ],
      
      // defaultResult: [
      //   {'Apple': 1 },
      //   {'Banana': 2 },
      //   {'Orange': 3 },
      //   {'Durian': 4 },
      //   {'Lemon': 5 },
      //   {'Peach': 6 },
      //   {'Cherry': 7 },
      //   {'Berry': 8 },
      //   {'Core': 9 },
      //   {'Fig': 10 },
      //   {'Haw': 11 },
      //   {'Melon': 12 },
      //   {'Plum': 13 },
      //   {'Pear': 14 },
      //   {'Peanut': 15 },
      //   {'Other': 16 }
      // ]
    };
  },

  methods: {
    query: function(val, filter, isloading) {
      setTimeout(()=>{
        this.loading = false; 
      }, 2000);
      return filter(this.defaultResult, val);
    }
  }
  
});

});
