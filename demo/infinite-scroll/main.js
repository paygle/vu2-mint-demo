define([
  'vue',
  'text!demo/infinite-scroll/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PageInfiniteScroll', {
  template: tpl,
  data: function(){
    return {
      list: [],
      loading: false,
      allLoaded: false,
      wrapperHeight: 0
    };
  },
  
  methods: {
    loadMore: function() {
      var that = this;
      this.loading = true;
      setTimeout(function() {
        let last = that.list[that.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          that.list.push(last + i);
        }
        that.loading = false;
      }, 2500);
    }
  },

  mounted: function() {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    for (let i = 1; i <= 20; i++) {
      this.list.push(i);
    }
  }
  
});

});
