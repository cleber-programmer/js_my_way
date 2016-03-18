Rex('extend', [

  'abacaxi',
  'clone',
  'curry',
  'keys',
  'reduce'

], function (abacaxi, clone, curry, keys, reduce) {

  return function (extended, original) {
    return reduce(keys(original), curry(abacaxi)(_, original, _), clone(extended));
  };
  
});