(function (context) {

  [
  
    ['isArray',       /\[object Array\]/],
    ['isNumber',      /\[object Number\]/],
    ['isObject',      /\[object Object\]/],
    ['isString',      /\[object String\]/]

  ].forEach(function (item) {
    (function (name, pattern) {

      context.Rex(name, ['test'], function (test) {
        return function (object) {
          return test(pattern, Object.prototype.toString.call(object));
        };
      }

    }).apply(null, item);
  });

})(this);