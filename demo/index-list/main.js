define([
  'vue',
  'text!demo/index-list/main.tpl'
], function(Vue, tpl) {
  'use strict';
var NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];

return Vue.component('PageIndexList', {
  template: tpl,
  data: function(){
    return {
      alphabet: []
    };
  },
  
  created: function() {
    var that = this;
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(function(initial) {
      let cells = NAMES.filter(function(name){ name[0] === initial });
      that.alphabet.push({ initial: initial, cells:cells });
    });
  }
  
});

});
