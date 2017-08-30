/** home 入口模块JS处理 */
define([
  'vue',
	'MINT',
	"vuex",
  "vueRouter",
	'demo/home/panel/main'
], function(
	Vue, 
	MINT, 
	Vuex, 
	VueRouter,
	Panel
) {
  'use strict';
Vue.use(MINT); //使用框架组件
Vue.use(Vuex);
Vue.use(VueRouter);

/********  数据管理  ********/
var store = new Vuex.Store({});

/********  路由配置管理  ********/
var router = new VueRouter({});

new Vue({
	el: '#main-body',
	store: store,
	router: router,
	data: {
		
	}
});
 
});
