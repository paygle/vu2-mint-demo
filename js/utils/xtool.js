define(function(require, exports, module) {
  'use strict';
  
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  module.exports = {

    hasOwn: function(obj, key) {
      return hasOwnProperty.call(obj, key);
    },
  
    merge: function (target) {
      for (let i = 1, j = arguments.length; i < j; i++) {
        let source = arguments[i] || {};
        for (let prop in source) {
          if (source.hasOwnProperty(prop)) {
            let value = source[prop];
            if (value !== undefined) {
              target[prop] = value;
            }
          }
        }
      }
      return target;
    },
  
    toObject: function(arr) {
      var res = {};
      for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
          extend(res, arr[i]);
        }
      }
      return res;
    },
  
    getValueByPath: function(object, prop) {
      prop = prop || '';
      var paths = prop.split('.');
      var current = object;
      var result = null;
      for (var i = 0, j = paths.length; i < j; i++) {
        var path = paths[i];
        if (!current) break;
    
        if (i === j - 1) {
          result = current[path];
          break;
        }
        current = current[path];
      }
      return result;
    },
    /**
     * @author liuxp
     * 数据对象类型判断
     * 支持返回类型：String、 Number、Boolean、Array、Object、Function、Date、Math...
     */
    TypeOf: function(o) {
      var type = typeof o !== "undefined" ? Object.prototype.toString.call(o) : undefined;
      if (type) {
        type = String(type).replace(/object\s+\w+/, function (rep) {
          return rep.replace(/object\s+/, '');
        }).replace(/[\[\]]*/g, '');
      }
      return type;
    },
    
    /**
     * @param tag 标签名
     * @param attrs 属性对象
     * @param children 子结点对象
     */
    createDomElement: function(tag, attrs, children) {
      var el = document.createElement(tag);
      if (attrs) {
        for (var key in attrs) {
          attrs.hasOwnProperty(key) && el.setAttribute(key, attrs[key]);
        }
      }
      if (children) {
        for (var i = 0, length = children.length; i < length; i++) {
          el.appendChild(children[i]);
        }
      }
      return el;
    },
  
    /**
     * @author liuxp
     * 随机字符串生成函数
     * len [Number] 返回字符串长度, 默认 10 位
     * pre [String] 前缀字符串， 默认为空
     * 返回类型： String
     */
    randomChar: function(len, pre) {
    
        var chars = ["A", "B",
          "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
          "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
          "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f",
          "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
          "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
          "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
        ];
        var t = (new Date()).getTime();
        var ulen = len || 10;
        var upre = pre || '';
        var result = '';
      
        // 字符串生成
        function genChars(first) {
          var mr = Math.random();
          var rds = first ? String(t).replace('0.', '') + String(mr).replace('0.', '') : String(mr).replace('0.', '');
          var rdsLen = rds.length;
          var rdnums = [], c, c6, rdnumsLen, pos = 0, rdpos = 0, resultChars = [];
      
          while (pos < rdsLen) {
            c = rds.substring(pos, pos + 1);
            if (c > 6) {
              rdnums.push(Number(c));
              pos++;
            } else if (c == 6) {
              c6 = rds.substring(pos, pos + 2);
              if (c6 < 62) {
                rdnums.push(Number(c6));
                pos += 2;
              } else {
                rdnums.push(c);
                pos++;
              }
            } else if (c < 6) {
              rdnums.push(Number(rds.substring(pos, pos + 2)));
              pos += 2;
            }
          }
          rdnumsLen = rdnums.length;
          while (rdpos < rdnumsLen) {
            resultChars.push(chars[rdnums[rdpos]]);
            rdpos++;
          }
          result += resultChars.join('');
        }
      
        genChars(true);
        while (result.length < ulen) {
          genChars();
        }
        if (result.length > ulen) {
          result = result.substring(result.length - ulen, result.length);
        }
        return upre + result;
      },
  
    /**
     * @author liuxp
     * 将复杂对象和JSON字符串，转换成简单数据类型
     * @param  o  [ Array | Object | JSON String ]
     */
    JsonToObject: function(o) {
      if (typeof o === 'string') {
        return JSON.parse(o);
      } else if (typeof o === 'object') {
        return JSON.parse(JSON.stringify(o));
      }
      return null;
    },
    
    /**
     * Date类型转换为星期几
     * @param {*} date [Date]
     */
    Date2Week:function(date) {
      var weekArray = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
      return weekArray[date.getDay()];
    }
  } 
});
