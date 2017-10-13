define([
  'vue',
  'text!demo/address/main.tpl',
  'text!data/address-data.json'
], function(Vue, tpl, addrData) {
  'use strict';
// console.log('Data:', addrData);
/** mo-address 地址选择组件属性
 * 
    data  [Array]                         // 地址数据
    label  [String='省市区']               // 标签名称
    placeholder  [String = '请选择省市区']  //提示文字
    disabled: [Boolean = false]            // 是否禁用
    disableClear: [Boolean = false]       // 是否允许清除
    state  [String= 'default']            // 状态 同 mt-field 组件
    cancelText  [String = '取消']         // 左侧按钮名称
    confirmText  [String = '确定']        // 右侧按钮名称
    visibleItemCount  [Number= 7]         // 可见项目数
 *
 */
return Vue.component('PageAdress', {
  template: tpl,
  data: function(){
    return {
      addr: '21-2101-210101',
      adrdata: JSON.parse(addrData)
    };
  },
  
  watch: {
    addr: function(val) {
      console.log('地址值：', val);
    }
  }
  
});

});
