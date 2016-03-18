Rex('partial', [
  
  'apply',
  'concat',
  'slice'

], function (apply, concat, slice) {
  
  return function (func, parameters) {
    return function () {
      return apply(func, concat(parameters, slice(arguments)));
    };
  };
  
});