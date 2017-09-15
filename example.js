/** Public 入口模块JS处理 */
define([
  'vue',
  'MINT',
  'vuex',
  'vueRouter',
  'components/welcome/main',
  'components/login/main',
  'demo/panel/main',
  'demo/home/main',
  'demo/collapse/main',
  'demo/toast/main',
  'demo/indicator/main',
  'demo/pull-down/main',
  'demo/pull-up/main',
  'demo/infinite-scroll/main',
  'demo/message-box/main',
  'demo/action-sheet/main',
  'demo/popup/main',
  'demo/swipe/main',
  'demo/lazyload/main',
  'demo/range/main',
  'demo/progress/main',
  'demo/picker/main',
  'demo/datetime-picker/main',
  'demo/index-list/main',
  'demo/palette-button/main',
  'demo/header/main',
  'demo/tabbar/main',
  'demo/navbar/main',
  'demo/button/main',
  'demo/cell/main',
  'demo/cell-swipe/main',
  'demo/spinner/main',
  'demo/tab-container/main',
  'demo/search/main',
  'demo/select/main',
  'demo/switch/main',
  'demo/checklist/main',
  'demo/radio/main',
  'demo/field/main',
  'demo/badge/main'
], function(
  Vue, 
  MINT,
  Vuex,
  VueRouter,
  Welcome,
  Login,
  Panel,
  Home,
  Collapse,
  Toast,
  Indicator,
  PullDown,
  PullUp,
  InfiniteScroll,
  MessageBox,
  ActionSheet,
  Popup,
  Swipe,
  Lazyload,
  Range,
  Progress,
  Picker,
  DatetimePicker,
  IndexList,
  PaletteButton,
  Header,
  Tabbar,
  Navbar,
  Button,
  Cell,
  CellSwipe,
  Spinner,
  TabContainer,
  Search,
  Select,
  Switch,
  Checklist,
  Radio,
  Field,
  Badge
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
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: []
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
      name: 'panel',
      component: Panel,
      children: []
    },
    {
      path: "/collapse",
      name: 'collapse',
      component: Collapse
    },
    {
      path: "/toast",
      component: Toast,
      name: "toast"
    },
    {
      path: "/indicator",
      component: Indicator,
      name: "indicator"
    },
    {
      path: "/pull-down",
      component: PullDown,
      name: "pull-down"
    },
    {
      path: "/pull-up",
      component: PullUp,
      name: "pull-up"
    },
    {
      path: "/infinite-scroll",
      component: InfiniteScroll,
      name: "infinite-scroll"
    },
    {
      path: "/message-box",
      component: MessageBox,
      name: "message-box"
    },
    {
      path: "/action-sheet",
      component: ActionSheet,
      name: "action-sheet"
    },
    {
      path: "/popup",
      component: Popup,
      name: "popup"
    },
    {
      path: "/swipe",
      component: Swipe,
      name: "swipe"
    },
    {
      path: "/lazyload",
      component: Lazyload,
      name: "lazyload"
    },
    {
      path: "/range",
      component: Range,
      name: "range"
    },
    {
      path: "/progress",
      component: Progress,
      name: "progress"
    },
    {
      path: "/picker",
      component: Picker,
      name: "picker"
    },
    {
      path: "/datetime-picker",
      component: DatetimePicker,
      name: "time"
    },
    {
      path: "/index-list",
      component: IndexList,
      name: "index-list"
    },
    {
      path: "/palette-button",
      component: PaletteButton,
      name: "palette-button"
    },
    {
      path: "/header",
      component: Header,
      name: "header"
    },
    {
      path: "/tabbar",
      component: Tabbar,
      name: "tabbar"
    },
    {
      path: "/navbar",
      component: Navbar,
      name: "navbar"
    },
    {
      path: "/button",
      component: Button,
      name: "button"
    },
    {
      path: "/cell",
      component: Cell,
      name: "cell"
    },
    {
      path: "/cell-swipe",
      component: CellSwipe,
      name: "cell-swipe"
    },
    {
      path: "/spinner",
      component: Spinner,
      name: "spinner"
    },
    {
      path: "/tab-container",
      component: TabContainer,
      name: "tab-container"
    },
    {
      path: "/search",
      component: Search,
      name: "searchbar"
    },
    {
      path: "/select",
      component: Select,
      name: "select"
    },
    {
      path: "/switch",
      component: Switch,
      name: "switch"
    },
    {
      path: "/checklist",
      component: Checklist,
      name: "checklist"
    },
    {
      path: "/radio",
      component: Radio,
      name: "radio"
    },
    {
      path: "/field",
      component: Field,
      name: "field"
    },
    {
      path: "/badge",
      component: Badge,
      name: "badge"
    }
  ]
});
  

 


new Vue({
  el:'#main-body',
  store: store,
  router: router,
  computed: {
    visible() {
      return ['/home', '/header', '/search'].indexOf(this.$route.path) < 0;
    }
  }
});
 
});