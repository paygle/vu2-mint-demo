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

/* 验证规则数据格式
[
  {
    required: false,     // 仅当前结点有效
    type: 'number',      // 仅当前结点有效,可选：number, date, email, phone, ident（身份证）
    field: 'name',       // 当前使用 validators 时，仅此字段有效
    rule:/\d/ig, 
    msg:'这个是错的', 
    validator: function(value,callback){ callback(msg);}
    validators: [
      {
        required: false, 
        field: 'name', 
        rule:/\d/ig, 
        msg:'这个是错的', 
        validator: function(value,callback){ callback(msg);}
      }
    ]
  }
]
*/
return Vue.component('PageSelect', {
  template: tpl,
  data: function(){

    var validate = {
      required: true,
      field: 'selectM',
      validators: [
        {
          rule: /\d/g, 
          msg: '这个是错的'
        },
        {
          validator: (value, callback)=>{
            callback('外面验证错误');
            console.log('valid msg', value);
          }
        }
      ]
    };

    return {
      select: '2',
      selectp: '',
      selectM: '',
      validate: validate,
      validStatus: {},
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
    getItems(items) {
      console.log('items:', items);
    },
    fillParamOptions: function(getOptions, param) {
      console.log('PARAM1:', param);
      getOptions([
        {value: '1', label: 'B11111'},
        {value: '2', label: 'B22222'},
        {value: '3', label: 'B33333'},
        {value: '4', label: 'B44444'},
        {value: '5', label: 'B55555'}
      ]);
    },
    fillOptions: function(getOptions, param) {
      console.log('PARAM2:', param);
      
      if (param.key === '1' && param.key2 === '1') {
        getOptions([
          {value: '1', label: 'B11111'},
          {value: '2', label: 'B22222'},
          {value: '3', label: 'B33333'},
          {value: '4', label: 'B44444'},
          {value: '5', label: 'B55555'}
        ]);
      } else {
        getOptions([]);
      }
    },
    updateValidate: function(field, isInvalid) {
      this.validStatus[field] = isInvalid;
      console.log('select validate', field, isInvalid);
    },
    submit: function() {
      if (this.$refs.vsel.verifySubmit(this.validStatus)) {
        alert('验证通过');
      }
    }
  }
  
});

});
