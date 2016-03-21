Rex('extend', [

  'abacaxi',
  'curry',
  'keys',
  'reduce',
  '_'

], function (abacaxi, curry, keys, reduce, _) {

  return function (extended, original) {
    return reduce(keys(original), curry(abacaxi)(_, original, _), extended);
  };
  
});