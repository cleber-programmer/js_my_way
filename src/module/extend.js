Rex('extend', [

  'copy',
  'curry',
  'keys',
  'reduce',
  '_'

], function (copy, curry, keys, reduce, _) {

  return function (extended, original) {
    return reduce(keys(original), curry(copy)(_, original, _), extended);
  };
  
});