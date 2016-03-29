Rex('pick', [

  'copy',
  'curry',
  'reduce',
  '_'

], function (copy, curry, reduce, _) {
  
  return function (keys, object) {
  	return reduce(keys, curry(copy)(_, object, _), {});
  };
  
});