define([
  'vue',
  'text!demo/search/main.tpl'
], function(Vue, tpl) {
  'use strict';

/**
 * Search 组件属性
 * @attr {function} query - 查询结果 参数：(val, filterResult, setLoading)
 * @attr {number} [delay=500] - 延时查询时间 ms
 * @attr {boolean} [loading=false] - 是否显示 loading 图标
 * @attr {boolean} [list-none=false] - 是停用列表
 * @attr {string} [cancel-text=取消] - 取消按钮文字
 * @attr {string} [placeholder=取消] - 搜索框占位内容
 * @attr {boolean} [autofocus=false] - 自动 focus
 * @attr {boolean} [show=false] - 始终显示列表
 * @attr {string[]} [result] - 结果列表
 */

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
