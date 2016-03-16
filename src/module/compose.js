this.Rex('compose', [
  
  'curry',
  'reduce',
  'reverse',
  'slice',
  '_'

], function (curry, reduce, reverse, slice, _) {
  
  function callback(value, func) {
    return func(value);
  }
  
  return function () {
    return curry(reduce)(reverse(slice(arguments)), callback, _);
  };
  
});