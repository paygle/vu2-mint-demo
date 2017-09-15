define([
  'vue',
  'text!demo/home/main.tpl'
], function(Vue, tpl) {
  'use strict';

return Vue.component('PageHome', {
  template: tpl,
  data: function(){
    return {
      navs: [
        {
          "title": "JS Components",
          "list": [
            {
              "path": "/collapse",
              "name": "Collapse",
              "icon": "cell"
            },
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
              "path": "/select",
              "name": "Select",
              "icon": "cell"
            },
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
  }
});

});