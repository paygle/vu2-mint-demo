/** login component */
define([
  'zepto', 
  'vue',
  'text!components/login/main.tpl'
], function($, Vue, tpl){

var captchaServletUrl = APP_CONFIG.API_URL + 'core/captcha', //验证码地址
    loginServletUrl = APP_CONFIG.API_URL + 'core/login'; //登录地址

return Vue.component('login', {
  template: tpl,
  data: function() {
    return {
      username: '',
      email: '',
      password: '',
      phone: '',
      website: '',
      number: '',
      birthday: '',
      introduction: ''
    }
  },

  methods: {
  
  }
});

}); //End login
