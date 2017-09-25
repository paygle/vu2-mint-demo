(function(){

// 应用内基础配置
window.APP_CONFIG = {
	API_URL: "http://192.168.18.76:8080/demo-web/",
	APP_PATH: ""        // 配置自己的域名
};
 
// 初始化框架组件配置
window.COMPONENTS_CONFIG = {
	// 颜色主题类型 [green,  violet], 默认为空或注释掉本行，用于组件内部控制
	COLOR_THEME:"",
 
};
// 常用变量声明
var COMPONENTS = window.APP_CONFIG.APP_PATH + "js/components",
		JSPATH = window.APP_CONFIG.APP_PATH + "js",
		DEMO_EXAM  = window.APP_CONFIG.APP_PATH + "demo"; 

// 第三方库配置
require.config({
	shim: {
		'MINT':{
			deps: ['zepto', 'vue'],
			exports: 'MINT'
		}
	},
	paths : {
		// 路径配置
		"js": JSPATH,
		"utils": JSPATH + "/utils",
		"mixins": JSPATH + "/mixins",
		"libs": JSPATH + "/libs",
		"components": COMPONENTS,
		"demo": DEMO_EXAM,          
		// 常用库配置
		"text" : JSPATH + "/libs/require-text",
		"zepto" : JSPATH + "/libs/zepto",
		"vue" : JSPATH + "/libs/vue",
		"vuex" : JSPATH + "/libs/vuex",
		"vueRouter" : JSPATH + "/libs/vue-router",
		"validator": JSPATH + "/libs/validator",
		"MINT" : JSPATH + "/mint-ext",
		"xtool" : JSPATH + "/utils/xtool",
		"storageCache":  JSPATH + "/utils/web-storage-cache",
		"cacheUtil" : JSPATH + "/utils/cache-util"
	}
});

}());
