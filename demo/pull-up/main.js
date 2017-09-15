define([
  'vue',
  'text!demo/pull-up/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PagePullUp', {
  template: tpl,
  data: function(){
    return {
      list: [],
      allLoaded: false,
      bottomStatus: '',
      wrapperHeight: 0
    };
  },
  
  methods: {
    handleBottomChange: function(status) {
      this.bottomStatus = status;
    },

    loadBottom: function() {
      var that = this;
      setTimeout(function() {
        let lastValue = that.list[that.list.length - 1];
        if (lastValue < 40) {
          for (let i = 1; i <= 10; i++) {
            that.list.push(lastValue + i);
          }
        } else {
          that.allLoaded = true;
        }
        that.$refs.loadmore.onBottomLoaded();
      }, 1500);
    }
  },

  created: function() {
    for (let i = 1; i <= 20; i++) {
      this.list.push(i);
    }
  },

  mounted: function() {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
  }
  
});

});
