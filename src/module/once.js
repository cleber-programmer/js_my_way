Rex('once', [

  'always',
  'apply'

], function (always, apply) {
  
  return function (func) {
    return function () {
      return !!func && always(apply(func, arguments))(func = null);
    };
  };
  
});