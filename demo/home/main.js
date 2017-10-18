define([
  'vue',
  'text!demo/home/main.tpl',
  'js/utils/xtool'
], function(Vue, tpl, xtool) {
  'use strict';
var mergeArray = xtool.mergeArray;

return Vue.component('PageHome', {
  template: tpl,
  data: function(){
    return {
      navs: [
        {
          "title": "框架组提供",
          "list": [
            {
              "path": "/welcome",
              "name": "字体图标展示",
              "icon": "cell"
            },
            {
              "path": "/collapse",
              "name": "Collapse",
              "icon": "cell"
            },
            {
              "path": "/circle-step",
              "name": "Circle Step",
              "icon": "cell"
            },
            {
              "path": "/select",
              "name": "Select",
              "icon": "cell"
            },
            {
              "path": "/address",
              "name": "address",
              "icon": "cell"
            },
            {
              "path": "/poplist",
              "name": "Poplist",
              "icon": "cell"
            },
            {
              "path": "/upload",
              "name": "Upload",
              "icon": "cell"
            }
          ]
        },
        {
          "title": "JS Components",
          "list": [
            {
              "path": "/toast",
              "name": "Toast",
              "icon": "toast"
            },
            {
              "path": "/indicator",
              "name": "Indicator",
              "icon": "indicator"
            },
            {
              "path": "/pull-down",
              "name": "Pull down",
              "icon": "pull-down"
            },
            {
              "path": "/pull-up",
              "name": "Pull up",
              "icon": "pull-up"
            },
            {
              "path": "/infinite-scroll",
              "name": "Infinite scroll",
              "icon": "infinite-scroll"
            },
            {
              "path": "/message-box",
              "name": "Message box",
              "icon": "message-box"
            },
            {
              "path": "/action-sheet",
              "name": "Action sheet",
              "icon": "action-sheet"
            },
            {
              "path": "/popup",
              "name": "Popup",
              "icon": "popup"
            },
            {
              "path": "/swipe",
              "name": "Swipe",
              "icon": "swipe"
            },
            {
              "path": "/lazyload",
              "name": "Lazy load",
              "icon": "lazyload"
            },
            {
              "path": "/range",
              "name": "Range",
              "icon": "range"
            },
            {
              "path": "/progress",
              "name": "Progress",
              "icon": "progress"
            },
            {
              "path": "/picker",
              "name": "Picker",
              "icon": "picker"
            },
            {
              "path": "/datetime-picker",
              "name": "Datetime Picker",
              "icon": "time"
            },
            {
              "path": "/index-list",
              "name": "Index List",
              "icon": "alphabet"
            },
            {
              "path": "/palette-button",
              "name": "Palette Button",
              "icon": "alphabet"
            }
          ]
        },
        {
          "title": "CSS Components",
          "list": [
            {
              "path": "/header",
              "name": "Header",
              "icon": "header"
            },
            {
              "path": "/tabbar",
              "name": "Tabbar",
              "icon": "tabbar"
            },
            {
              "path": "/navbar",
              "name": "Navbar",
              "icon": "navbar"
            },
            {
              "path": "/button",
              "name": "Button",
              "icon": "button"
            },
            {
              "path": "/cell",
              "name": "Cell",
              "icon": "cell"
            },
            {
              "path": "/cell-swipe",
              "name": "Cell Swipe",
              "icon": "cell"
            },
            {
              "path": "/spinner",
              "name": "Spinner",
              "icon": "spinner"
            },
            {
              "path": "/tab-container",
              "name": "TabContainer",
              "icon": "panel"
            },
            {
              "path": "/search",
              "name": "Search",
              "icon": "searchbar"
            }
          ]
        },
        {
          "title": "Form Components",
          "list": [
            {
              "path": "/switch",
              "name": "Switch",
              "icon": "switch"
            },
            {
              "path": "/checklist",
              "name": "Checklist",
              "icon": "checklist"
            },
            {
              "path": "/radio",
              "name": "Radio",
              "icon": "radio"
            },
            {
              "path": "/field",
              "name": "Field",
              "icon": "field"
            },
            {
              "path": "/badge",
              "name": "Badge",
              "icon": "badge"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    var arr1 = [{a: 1, b: 2, d: 5}];
    var arr2 = [{a: 3, b: 2, d: 5}];
    var arr3 = mergeArray(arr1, arr2, [{a:1, b:2}]);

    console.log('数组1', arr1);
    console.log('数组2', arr2);
    console.log('数组合并', arr3);
  }
});

});
