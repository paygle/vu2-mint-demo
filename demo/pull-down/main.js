define([
  'vue',
  'text!demo/pull-down/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PagePullDown', {
  template: tpl,
  data: function(){
    return {
      list: [],
      topStatus: '',
      wrapperHeight: 0,
      translate: 0,
      moveTranslate: 0
    };
  },
  
  methods: {
    handleTopChange: function(status) {
      this.moveTranslate = 1;
      this.topStatus = status;
    },
    translateChange: function(translate) {
      const translateNum = +translate;
      this.translate = translateNum.toFixed(2);
      this.moveTranslate = (1 + translateNum / 70).toFixed(2);
    },
    loadTop: function() {
      var that = this;
      setTimeout(function(){
        let firstValue = that.list[0];
        for (let i = 1; i <= 10; i++) {
          that.list.unshift(firstValue - i);
        }
        that.$refs.loadmore.onTopLoaded();
      }, 1500);
    }
  },

  created: function() {
    for (let i = 1; i <= 5; i++) {
      this.list.push(i);
    }
  },

  mounted: function() {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
  }
  
});

});
