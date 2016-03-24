Rex('h.parseProperty', ['isObject'], function (isObject) {
  
  return function (a) {
    return isObject(a) ? a : {};
  };
  
});