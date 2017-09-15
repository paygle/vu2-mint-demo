define([
  'vue',
  'text!demo/action-sheet/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PageActionSheet', {
  template: tpl,
  data: function(){
    return {
      sheetVisible: false,
      sheetVisible2: false,
      actions: [],
      actions2: []
    };
  },
  methods: {
    takePhoto: function() {
      console.log('taking photo');
    },

    openAlbum: function() {
      console.log('opening album');
    },

    goBack: function() {
      history.go(-1);
    }
  },

  mounted: function() {
    this.actions = [{
      name: '拍照',
      method: this.takePhoto
    }, {
      name: '从相册中选择',
      method: this.openAlbum
    }];
    this.actions2 = [{
      name: '确定'
    }, {
      name: '返回上一步',
      method: this.goBack
    }];
  }
});

});
