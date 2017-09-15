define([
  'vue',
  'text!demo/palette-button/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PagePaletteButton', {
  template: tpl,
  methods: {
    main_log: function(val) {
      console.log('main_log', val);
    },
    sub_log: function(val) {
      console.log('sub_log', val);
      this.$refs.target_1.collapse();
    }
  }
  
});

});
