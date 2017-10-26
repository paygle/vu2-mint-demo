define([
  'vue',
  'text!demo/digital/main.tpl'
], function(Vue, tpl) {
  'use strict';

/** mo-digital 下拉组件属性
 * 

 */

/* 验证规则数据格式
[
  {
    required: false,     // 仅当前结点有效
    type: 'number',      // 仅当前结点有效,可选：number, date, email, phone, ident（身份证）
    field: 'name',       // 当前使用 validators 时，仅此字段有效
    // rule:/\d/ig, 
    // msg:'这个是错的', 
    // validator: function(value,callback){ callback(msg);}    // 此验证单独使用
    validators: [
      {
        rule:/\d/ig,        // 自定义规则验证
        msg:'这个是错的',    // 自定义规则消息
        validator: function(value,callback){ callback(msg);}   // 此验证单独使用
      }
    ]
  }
]
*/
return Vue.component('PageDigital', {
  template: tpl,
  data: function(){

    var validate = {
      required: true,
      type: 'number',
      field: 'num',
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
      num: 23456789003,
      validStatus: {},
      validate: validate
    };
  },
  methods: {
    updateValidate: function(field, isInvalid) {
      this.validStatus[field] = isInvalid;
      console.log('digital validate', field, isInvalid);
    },
    submit: function() {
      if (this.$refs.digital.verifySubmit(this.validStatus)) {
        alert('验证通过');
      }
    }
  }
  
});

});
