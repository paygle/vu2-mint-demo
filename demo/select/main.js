define([
  'vue',
  'text!demo/select/main.tpl'
], function(Vue, tpl) {
  'use strict';

/** mo-select 下拉组件属性
 * 
 *  disabled [Boolean]         // 是否禁用
    multiple [Boolean]         // 是否为多选
    optionsData [Array]        // 初始化option 数据集合 { value: '123', label: '123' }
    fillParams  [任意]          // 回调参数
    fillOptions [Function]      // 填充 option 数据
    placeholder [String]        // 提示语
 */
return Vue.component('PageSelect', {
  template: tpl,
  data: function(){
    return {
      select: '2',
      selectp: '',
      selectM: '',
      options: [
        {value: '1', label: '11111'},
        {value: '2', label: '22222'},
        {value: '3', label: '33333'},
        {value: '4', label: '44444'},
        {value: '5', label: '55555'}
      ]
    };
  },
  computed: {
    combParam: function() {
      return {key: this.select, key2: this.selectp};
    }
  },
  methods: {
    fillParamOptions: function(param) {
      console.log('PARAM1:', param);
      return [
        {value: '1', label: 'B11111'},
        {value: '2', label: 'B22222'},
        {value: '3', label: 'B33333'},
        {value: '4', label: 'B44444'},
        {value: '5', label: 'B55555'}
      ];
    },
    fillOptions: function(param) {
      console.log('PARAM2:', param);
      if (param.key === '1' && param.key2 === '1') {
        return [
          {value: '', label: '没有'},
          {value: '1', label: 'B11111'},
          {value: '2', label: 'B22222'},
          {value: '3', label: 'B33333'},
          {value: '4', label: 'B44444'},
          {value: '5', label: 'B55555'}
        ];
      }
      return [];
    }
  }
  
});

});
