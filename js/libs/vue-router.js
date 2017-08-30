!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.VueRouter=e()}(this,function(){"use strict";function t(t,e){if(!t)throw new Error("[vue-router] "+e)}function e(t,e){t||"undefined"!=typeof console&&console.warn("[vue-router] "+e)}function n(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function r(t,n){switch(typeof n){case"undefined":return;case"object":return n;case"function":return n(t);case"boolean":return n?t.params:void 0;default:e(!1,'props in "'+t.path+'" is a '+typeof n+", expecting an object, function or boolean.")}}function o(t,n,r){void 0===n&&(n={});var o,a=r||i;try{o=a(t||"")}catch(t){e(!1,t.message),o={}}for(var u in n){var c=n[u];o[u]=Array.isArray(c)?c.slice():c}return o}function i(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var n=t.replace(/\+/g," ").split("="),r=$t(n.shift()),o=n.length>0?$t(n.join("=")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]}),e):e}function a(t){var e=t?Object.keys(t).map(function(e){var n=t[e];if(void 0===n)return"";if(null===n)return Tt(e);if(Array.isArray(n)){var r=[];return n.forEach(function(t){void 0!==t&&(null===t?r.push(Tt(e)):r.push(Tt(e)+"="+Tt(t)))}),r.join("&")}return Tt(e)+"="+Tt(n)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}function u(t,e,n,r){var o=r&&r.options.stringifyQuery,i={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:e.query||{},params:e.params||{},fullPath:s(e,o),matched:t?c(t):[]};return n&&(i.redirectedFrom=s(n,o)),Object.freeze(i)}function c(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function s(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var o=t.hash;void 0===o&&(o="");var i=e||a;return(n||"/")+i(r)+o}function p(t,e){return e===qt?t===e:!!e&&(t.path&&e.path?t.path.replace(St,"")===e.path.replace(St,"")&&t.hash===e.hash&&f(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&f(t.query,e.query)&&f(t.params,e.params)))}function f(t,e){void 0===t&&(t={}),void 0===e&&(e={});var n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every(function(n){var r=t[n],o=e[n];return"object"==typeof r&&"object"==typeof o?f(r,o):String(r)===String(o)})}function h(t,e){return 0===t.path.replace(St,"/").indexOf(e.path.replace(St,"/"))&&(!e.hash||t.hash===e.hash)&&l(t.query,e.query)}function l(t,e){for(var n in e)if(!(n in t))return!1;return!0}function d(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function y(t){if(t)for(var e,n=0;n<t.length;n++){if("a"===(e=t[n]).tag)return e;if(e.children&&(e=y(e.children)))return e}}function v(t){if(!v.installed){v.installed=!0,jt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("router-view",At),t.component("router-link",Ut);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}function m(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var o=e.split("/");n&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function g(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf("?");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}function b(t){return t.replace(/\/\//g,"/")}function w(t,e){for(var n,r=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(n=Ft.exec(t));){var c=n[0],s=n[1],p=n.index;if(a+=t.slice(i,p),i=p+c.length,s)a+=s[1];else{var f=t[i],h=n[2],l=n[3],d=n[4],y=n[5],v=n[6],m=n[7];a&&(r.push(a),a="");var g=null!=h&&null!=f&&f!==h,b="+"===v||"*"===v,w="?"===v||"*"===v,x=n[2]||u,k=d||y;r.push({name:l||o++,prefix:h||"",delimiter:x,optional:w,repeat:b,partial:g,asterisk:!!m,pattern:k?C(k):m?".*":"[^"+O(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function x(t,e){return E(w(t,e))}function k(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function R(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function E(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=(r||{}).pretty?k:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var s,p=i[c.name];if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Mt(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(s=a(p[f]),!e[u].test(s))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(s)+"`");o+=(0===f?c.prefix:c.delimiter)+s}}else{if(s=c.asterisk?R(p):a(p),!e[u].test(s))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+s+'"');o+=c.prefix+s}}else o+=c}return o}}function O(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function C(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function j(t,e){return t.keys=e,t}function A(t){return t.sensitive?"":"i"}function _(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return j(t,e)}function T(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(q(t[o],e,n).source);return j(new RegExp("(?:"+r.join("|")+")",A(n)),e)}function $(t,e,n){return S(w(t,n),e,n)}function S(t,e,n){Mt(e)||(n=e||n,e=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=O(u);else{var c=O(u.prefix),s="(?:"+u.pattern+")";e.push(u),u.repeat&&(s+="(?:"+c+s+")*"),i+=s=u.optional?u.partial?c+"("+s+")?":"(?:"+c+"("+s+"))?":c+"("+s+")"}}var p=O(n.delimiter||"/"),f=i.slice(-p.length)===p;return r||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":r&&f?"":"(?="+p+"|$)",j(new RegExp("^"+i,A(n)),e)}function q(t,e,n){return Mt(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?_(t,e):Mt(t)?T(t,e,n):$(t,e,n)}function L(t,n,r){try{return(Nt[t]||(Nt[t]=Ht.compile(t)))(n||{},{pretty:!0})}catch(t){return e(!1,"missing param for "+r+": "+t.message),""}}function P(t,e,n,r){var o=e||[],i=n||Object.create(null),a=r||Object.create(null);t.forEach(function(t){U(o,i,a,t)});for(var u=0,c=o.length;u<c;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),c--,u--);return{pathList:o,pathMap:i,nameMap:a}}function U(n,r,o,i,a,u){var c=i.path,s=i.name;t(null!=c,'"path" is required in a route configuration.'),t("string"!=typeof i.component,'route config "component" for path: '+String(c||s)+" cannot be a string id. Use an actual component instead.");var p=M(c,a),f=i.pathToRegexpOptions||{};"boolean"==typeof i.caseSensitive&&(f.sensitive=i.caseSensitive);var h={path:p,regex:V(p,f),components:i.components||{default:i.component},instances:{},name:s,parent:a,matchAs:u,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};i.children&&(i.name&&!i.redirect&&i.children.some(function(t){return/^\/?$/.test(t.path)})&&e(!1,"Named Route '"+i.name+"' has a default child route. When navigating to this named route (:to=\"{name: '"+i.name+"'\"), the default child route will not be rendered. Remove the name from this route and use the name of the default child route for named links instead."),i.children.forEach(function(t){var e=u?b(u+"/"+t.path):void 0;U(n,r,o,t,h,e)})),void 0!==i.alias&&(Array.isArray(i.alias)?i.alias:[i.alias]).forEach(function(t){var e={path:t,children:i.children};U(n,r,o,e,a,h.path||"/")}),r[h.path]||(n.push(h.path),r[h.path]=h),s&&(o[s]?u||e(!1,'Duplicate named routes definition: { name: "'+s+'", path: "'+h.path+'" }'):o[s]=h)}function V(t,n){var r=Ht(t,[],n),o={};return r.keys.forEach(function(n){e(!o[n.name],'Duplicate param keys in route with path: "'+t+'"'),o[n.name]=!0}),r}function M(t,e){return t=t.replace(/\/$/,""),"/"===t[0]?t:null==e?t:b(e.path+"/"+t)}function H(t,n,r,i){var a="string"==typeof t?{path:t}:t;if(a.name||a._normalized)return a;if(!a.path&&a.params&&n){(a=I({},a))._normalized=!0;var u=I(I({},n.params),a.params);if(n.name)a.name=n.name,a.params=u;else if(n.matched.length){var c=n.matched[n.matched.length-1].path;a.path=L(c,u,"path "+n.path)}else e(!1,"relative params navigation requires a current route.");return a}var s=g(a.path||""),p=n&&n.path||"/",f=s.path?m(s.path,p,r||a.append):p,h=o(s.query,a.query,i&&i.options.parseQuery),l=a.hash||s.hash;return l&&"#"!==l.charAt(0)&&(l="#"+l),{_normalized:!0,path:f,query:h,hash:l}}function I(t,e){for(var n in e)t[n]=e[n];return t}function z(n,r){function o(t){P(t,f,h,l)}function i(t,n,o){var i=H(t,n,!1,r),a=i.name;if(a){var u=l[a];if(e(u,"Route with name '"+a+"' does not exist"),!u)return s(null,i);var c=u.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof i.params&&(i.params={}),n&&"object"==typeof n.params)for(var p in n.params)!(p in i.params)&&c.indexOf(p)>-1&&(i.params[p]=n.params[p]);if(u)return i.path=L(u.path,i.params,'named route "'+a+'"'),s(u,i,o)}else if(i.path){i.params={};for(var d=0;d<f.length;d++){var y=f[d],v=h[y];if(B(v.regex,i.path,i.params))return s(v,i,o)}}return s(null,i)}function a(n,o){var a=n.redirect,c="function"==typeof a?a(u(n,o,null,r)):a;if("string"==typeof c&&(c={path:c}),!c||"object"!=typeof c)return e(!1,"invalid redirect option: "+JSON.stringify(c)),s(null,o);var p=c,f=p.name,h=p.path,d=o.query,y=o.hash,v=o.params;if(d=p.hasOwnProperty("query")?p.query:d,y=p.hasOwnProperty("hash")?p.hash:y,v=p.hasOwnProperty("params")?p.params:v,f)return t(l[f],'redirect failed: named route "'+f+'" not found.'),i({_normalized:!0,name:f,query:d,hash:y,params:v},void 0,o);if(h){var m=D(h,n);return i({_normalized:!0,path:L(m,v,'redirect route with path "'+m+'"'),query:d,hash:y},void 0,o)}return e(!1,"invalid redirect option: "+JSON.stringify(c)),s(null,o)}function c(t,e,n){var r=i({_normalized:!0,path:L(n,e.params,'aliased route with path "'+n+'"')});if(r){var o=r.matched,a=o[o.length-1];return e.params=r.params,s(a,e)}return s(null,e)}function s(t,e,n){return t&&t.redirect?a(t,n||e):t&&t.matchAs?c(t,e,t.matchAs):u(t,e,n,r)}var p=P(n),f=p.pathList,h=p.pathMap,l=p.nameMap;return{match:i,addRoutes:o}}function B(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var o=1,i=r.length;o<i;++o){var a=t.keys[o-1],u="string"==typeof r[o]?decodeURIComponent(r[o]):r[o];a&&(n[a.name]=u)}return!0}function D(t,e){return m(t,e.parent?e.parent.path:"/",!0)}function F(){window.addEventListener("popstate",function(t){J(),t.state&&t.state.key&&et(t.state.key)})}function N(e,n,r,o){if(e.app){var i=e.options.scrollBehavior;i&&(t("function"==typeof i,"scrollBehavior must be a function"),e.app.$nextTick(function(){var t=K(),e=i(n,r,o?t:null);if(e){var a="object"==typeof e;if(a&&"string"==typeof e.selector){var u=document.querySelector(e.selector);if(u){var c=e.offset&&"object"==typeof e.offset?e.offset:{};t=Q(u,c=Y(c))}else W(e)&&(t=X(e))}else a&&W(e)&&(t=X(e));t&&window.scrollTo(t.x,t.y)}}))}}function J(){var t=tt();t&&(Jt[t]={x:window.pageXOffset,y:window.pageYOffset})}function K(){var t=tt();if(t)return Jt[t]}function Q(t,e){var n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{x:r.left-n.left-e.x,y:r.top-n.top-e.y}}function W(t){return G(t.x)||G(t.y)}function X(t){return{x:G(t.x)?t.x:window.pageXOffset,y:G(t.y)?t.y:window.pageYOffset}}function Y(t){return{x:G(t.x)?t.x:0,y:G(t.y)?t.y:0}}function G(t){return"number"==typeof t}function Z(){return Qt.now().toFixed(3)}function tt(){return Wt}function et(t){Wt=t}function nt(t,e){J();var n=window.history;try{e?n.replaceState({key:Wt},"",t):(Wt=Z(),n.pushState({key:Wt},"",t))}catch(n){window.location[e?"replace":"assign"](t)}}function rt(t){nt(t,!0)}function ot(t,e,n){var r=function(o){o>=t.length?n():t[o]?e(t[o],function(){r(o+1)}):r(o+1)};r(0)}function it(t){return function(r,o,i){var a=!1,u=0,c=null;at(t,function(t,r,o,s){if("function"==typeof t&&void 0===t.cid){a=!0,u++;var p,f=ct(function(e){e.__esModule&&e.default&&(e=e.default),t.resolved="function"==typeof e?e:jt.extend(e),o.components[s]=e,--u<=0&&i()}),h=ct(function(t){var r="Failed to resolve async component "+s+": "+t;e(!1,r),c||(c=n(t)?t:new Error(r),i(c))});try{p=t(f,h)}catch(t){h(t)}if(p)if("function"==typeof p.then)p.then(f,h);else{var l=p.component;l&&"function"==typeof l.then&&l.then(f,h)}}}),a||i()}}function at(t,e){return ut(t.map(function(t){return Object.keys(t.components).map(function(n){return e(t.components[n],t.instances[n],t,n)})}))}function ut(t){return Array.prototype.concat.apply([],t)}function ct(t){var e=!1;return function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}function st(t){if(!t)if(Vt){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function pt(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ft(t,e,n,r){var o=at(t,function(t,r,o,i){var a=ht(t,e);if(a)return Array.isArray(a)?a.map(function(t){return n(t,r,o,i)}):n(a,r,o,i)});return ut(r?o.reverse():o)}function ht(t,e){return"function"!=typeof t&&(t=jt.extend(t)),t.options[e]}function lt(t){return ft(t,"beforeRouteLeave",yt,!0)}function dt(t){return ft(t,"beforeRouteUpdate",yt)}function yt(t,e){if(e)return function(){return t.apply(e,arguments)}}function vt(t,e,n){return ft(t,"beforeRouteEnter",function(t,r,o,i){return mt(t,o,i,e,n)})}function mt(t,e,n,r,o){return function(i,a,u){return t(i,a,function(t){u(t),"function"==typeof t&&r.push(function(){gt(t,e.instances,n,o)})})}}function gt(t,e,n,r){e[n]?t(e[n]):r()&&setTimeout(function(){gt(t,e,n,r)},16)}function bt(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function wt(t){var e=bt(t);if(!/^\/#/.test(e))return window.location.replace(b(t+"/#"+e)),!0}function xt(){var t=kt();return"/"===t.charAt(0)||(Et("/"+t),!1)}function kt(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)}function Rt(t){window.location.hash=t}function Et(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;window.location.replace(r+"#"+t)}function Ot(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ct(t,e,n){var r="hash"===n?"#"+e:e;return t?b(t+"/"+r):r}var jt,At={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,o=e.children,i=e.parent,a=e.data;a.routerView=!0;for(var u=i.$createElement,c=n.name,s=i.$route,p=i._routerViewCache||(i._routerViewCache={}),f=0,h=!1;i&&i._routerRoot!==i;)i.$vnode&&i.$vnode.data.routerView&&f++,i._inactive&&(h=!0),i=i.$parent;if(a.routerViewDepth=f,h)return u(p[c],a,o);var l=s.matched[f];if(!l)return p[c]=null,u();var d=p[c]=l.components[c];return a.registerRouteInstance=function(t,e){var n=l.instances[c];(e&&n!==t||!e&&n===t)&&(l.instances[c]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){l.instances[c]=e.componentInstance},a.props=r(s,l.props&&l.props[c]),u(d,a,o)}},_t=function(t){return"%"+t.charCodeAt(0).toString(16)},Tt=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,_t).replace(/%2C/g,",")},$t=decodeURIComponent,St=/\/?$/,qt=u(null,{path:"/"}),Lt=[String,Object],Pt=[String,Array],Ut={name:"router-link",props:{to:{type:Lt,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:Pt,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,o=n.resolve(this.to,r,this.append),i=o.location,a=o.route,c=o.href,s={},f=n.options.linkActiveClass,l=n.options.linkExactActiveClass,v=null==f?"router-link-active":f,m=null==l?"router-link-exact-active":l,g=null==this.activeClass?v:this.activeClass,b=null==this.exactActiveClass?m:this.exactActiveClass,w=i.path?u(null,i,null,n):a;s[b]=p(r,w),s[g]=this.exact?s[b]:h(r,w);var x=function(t){d(t)&&(e.replace?n.replace(i):n.push(i))},k={click:d};Array.isArray(this.event)?this.event.forEach(function(t){k[t]=x}):k[this.event]=x;var R={class:s};if("a"===this.tag)R.on=k,R.attrs={href:c};else{var E=y(this.$slots.default);if(E){E.isStatic=!1;var O=jt.util.extend;(E.data=O({},E.data)).on=k,(E.data.attrs=O({},E.data.attrs)).href=c}else R.on=k}return t(this.tag,R,this.$slots.default)}},Vt="undefined"!=typeof window,Mt=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Ht=q,It=w,zt=x,Bt=E,Dt=S,Ft=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");Ht.parse=It,Ht.compile=zt,Ht.tokensToFunction=Bt,Ht.tokensToRegExp=Dt;var Nt=Object.create(null),Jt=Object.create(null),Kt=Vt&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),Qt=Vt&&window.performance&&window.performance.now?window.performance:Date,Wt=Z(),Xt=function(t,e){this.router=t,this.base=st(e),this.current=qt,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};Xt.prototype.listen=function(t){this.cb=t},Xt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Xt.prototype.onError=function(t){this.errorCbs.push(t)},Xt.prototype.transitionTo=function(t,e,n){var r=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){r.updateRoute(o),e&&e(o),r.ensureURL(),r.ready||(r.ready=!0,r.readyCbs.forEach(function(t){t(o)}))},function(t){n&&n(t),t&&!r.ready&&(r.ready=!0,r.readyErrorCbs.forEach(function(e){e(t)}))})},Xt.prototype.confirmTransition=function(t,r,o){var i=this,a=this.current,u=function(t){n(t)&&(i.errorCbs.length?i.errorCbs.forEach(function(e){e(t)}):(e(!1,"uncaught error during route navigation:"),console.error(t))),o&&o(t)};if(p(t,a)&&t.matched.length===a.matched.length)return this.ensureURL(),u();var c=pt(this.current.matched,t.matched),s=c.updated,f=c.deactivated,h=c.activated,l=[].concat(lt(f),this.router.beforeHooks,dt(s),h.map(function(t){return t.beforeEnter}),it(h));this.pending=t;var d=function(e,r){if(i.pending!==t)return u();try{e(t,a,function(t){!1===t||n(t)?(i.ensureURL(!0),u(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(u(),"object"==typeof t&&t.replace?i.replace(t):i.push(t)):r(t)})}catch(t){u(t)}};ot(l,d,function(){var e=[];ot(vt(h,e,function(){return i.current===t}).concat(i.router.resolveHooks),d,function(){if(i.pending!==t)return u();i.pending=null,r(t),i.router.app&&i.router.app.$nextTick(function(){e.forEach(function(t){t()})})})})},Xt.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(n){n&&n(t,e)})};var Yt=function(t){function e(e,n){var r=this;t.call(this,e,n);var o=e.options.scrollBehavior;o&&F(),window.addEventListener("popstate",function(t){var n=r.current;r.transitionTo(bt(r.base),function(t){o&&N(e,t,n,!0)})})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,o=this.current;this.transitionTo(t,function(t){nt(b(r.base+t.fullPath)),N(r.router,t,o,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,o=this.current;this.transitionTo(t,function(t){rt(b(r.base+t.fullPath)),N(r.router,t,o,!1),e&&e(t)},n)},e.prototype.ensureURL=function(t){if(bt(this.base)!==this.current.fullPath){var e=b(this.base+this.current.fullPath);t?nt(e):rt(e)}},e.prototype.getCurrentLocation=function(){return bt(this.base)},e}(Xt),Gt=function(t){function e(e,n,r){t.call(this,e,n),r&&wt(this.base)||xt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;window.addEventListener("hashchange",function(){xt()&&t.transitionTo(kt(),function(t){Et(t.fullPath)})})},e.prototype.push=function(t,e,n){this.transitionTo(t,function(t){Rt(t.fullPath),e&&e(t)},n)},e.prototype.replace=function(t,e,n){this.transitionTo(t,function(t){Et(t.fullPath),e&&e(t)},n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;kt()!==e&&(t?Rt(e):Et(e))},e.prototype.getCurrentLocation=function(){return kt()},e}(Xt),Zt=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)},n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){e.index=n,e.updateRoute(r)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Xt),te=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=z(e.routes||[],this);var n=e.mode||"hash";switch(this.fallback="history"===n&&!Kt&&!1!==e.fallback,this.fallback&&(n="hash"),Vt||(n="abstract"),this.mode=n,n){case"history":this.history=new Yt(this,e.base);break;case"hash":this.history=new Gt(this,e.base,this.fallback);break;case"abstract":this.history=new Zt(this,e.base);break;default:t(!1,"invalid mode: "+n)}},ee={currentRoute:{}};return te.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},ee.currentRoute.get=function(){return this.history&&this.history.current},te.prototype.init=function(e){var n=this;if(t(v.installed,"not installed. Make sure to call `Vue.use(VueRouter)` before creating root instance."),this.apps.push(e),!this.app){this.app=e;var r=this.history;if(r instanceof Yt)r.transitionTo(r.getCurrentLocation());else if(r instanceof Gt){var o=function(){r.setupListeners()};r.transitionTo(r.getCurrentLocation(),o,o)}r.listen(function(t){n.apps.forEach(function(e){e._route=t})})}},te.prototype.beforeEach=function(t){return Ot(this.beforeHooks,t)},te.prototype.beforeResolve=function(t){return Ot(this.resolveHooks,t)},te.prototype.afterEach=function(t){return Ot(this.afterHooks,t)},te.prototype.onReady=function(t,e){this.history.onReady(t,e)},te.prototype.onError=function(t){this.history.onError(t)},te.prototype.push=function(t,e,n){this.history.push(t,e,n)},te.prototype.replace=function(t,e,n){this.history.replace(t,e,n)},te.prototype.go=function(t){this.history.go(t)},te.prototype.back=function(){this.go(-1)},te.prototype.forward=function(){this.go(1)},te.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},te.prototype.resolve=function(t,e,n){var r=H(t,e||this.history.current,n,this),o=this.match(r,e),i=o.redirectedFrom||o.fullPath;return{location:r,route:o,href:Ct(this.history.base,i,this.mode),normalizedTo:r,resolved:o}},te.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==qt&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(te.prototype,ee),te.install=v,te.version="2.7.0",Vt&&window.Vue&&window.Vue.use(te),te});