Rex('compose', [
  
  'arity',
  'curry',
  'reduce',
  'reverse',
  'slice',
  '_'

], function (arity, curry, reduce, reverse, slice, _) {
  
  function callback(value, func) {
    return func(value);
  }
  
  return function () {
    return curry(arity(3, reduce))(reverse(slice(arguments)), callback, _);
  };
  
});