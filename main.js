/** Public 入口模块JS处理 */
define([
  'vue',
  'MINT',
  'vuex',
  'vueRouter',
  'components/welcome/main',
  'components/login/main',
  'demo/panel/main'
], function(
  Vue, 
  MINT,
  Vuex,
  VueRouter,
  Welcome,
  Login,
  Panel
) {
  'use strict';
  Vue.use(MINT); //使用框架组件
  Vue.use(Vuex);
  Vue.use(VueRouter);

/********  数据管理  ********/
var store = new Vuex.Store({

});

/********  路由配置管理  ********/
var router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
      children: []
    },
    {
      path: '/login',
      component: Login,
      children: []
    },
    {
      path: '/panel',
      component: Panel,
      children: []
    }

    // {
    //   path: '/edit-form-exam',
    //   component: EditFormExam,
    //   children: [{
    //     path: '/query-form',
    //     name: 'query-form',
    //     component: QueryForm
    //   },{
    //     path: '/add-row',
    //     name: 'add-row',
    //     component: AddRow
    //   },{
    //     path: '/edit-row',
    //     name: 'edit-row',
    //     component: EditRow
    //   }]
    // }
  ]
});
  

new Vue({
  el:'#main-body',
  store: store,
  router: router
});
 
});