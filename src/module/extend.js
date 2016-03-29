Rex('extend', [

  'clone',
  'copy',
  'curry',
  'keys',
  'reduce',
  '_'

], function (clone, copy, curry, keys, reduce, _) {

  return function (extended, original) {
    return reduce(keys(original), curry(copy)(_, original, _), clone(extended));
  };
  
});