Rex('pick', [

  'abacaxi',
  'curry',
  'reduce',
  '_'

], function (abacaxi, curry, reduce, _) {
  
  return function (keys, object) {
  	return reduce(keys, curry(abacaxi)(_, object, _), {});
  };
  
});