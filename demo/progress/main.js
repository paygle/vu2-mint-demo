define([
  'vue',
  'MINT',
  'text!demo/progress/main.tpl'
], function(Vue, MINT, tpl) {
  'use strict';

return Vue.component('PageProgress', {
  template: tpl,
  data: function(){
    return {
      progressVisible: false,
      value: 0,
      uploading: false,
      timer: null
    };
  },
  
  watch: {
    value: function(val) {
      if (val >= 100) {
        this.uploading = false;
        this.progressVisible = false;
        setTimeout(function(){
          MINT.Toast({ message: '上传成功', position: 'bottom', duration: 1000 })
        }, 200);
        clearTimeout(this.timer);
      }
    }
  },

  methods: {
    uploadFile: function() {
      if (!this.uploading) {
        var that=this;
        this.value = 0;
        this.progressVisible = true;
        this.uploading = true;
        this.timer = setInterval(function(){ that.value++ }, 10);
      }
    }
  }
  
});

});
