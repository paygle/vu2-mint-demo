define([
  'vue',
  'text!demo/field/main.tpl'
], function(Vue, tpl) {
  'use strict';

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

return Vue.component('PageField', {
  template: tpl,
  data: function() {
    var validate = {
      required: true,
      type: 'ident',    //可选类型： 
      field: 'email',
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
      value: 'a',
      email: '',
      validate: validate
    };
  },
  methods: {
    translate: function(setText, value) {
      setText('这是翻译内容');
    },
    updateValidate: function(field, isInvalid) {
      console.log('update validate', field, isInvalid);
    }
  }
});

});
