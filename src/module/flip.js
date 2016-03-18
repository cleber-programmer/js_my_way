Rex('flip', [
  
  'apply',
  'reverse',
  'slice'

], function (apply, reverse, slice) {
  
  return function (func) {
    return function () {
      return apply(func, reverse(slice(arguments)));
    };
  };
  
});