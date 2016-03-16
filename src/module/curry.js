this.Rex('curry', [
  
  'apply',
  'different',
  'every',
  'map',
  'partial',
  'shift',
  'slice',
  'sparse',
  'split',
  '_'

], function (apply, different, every, map, partial, shift, slice, sparse, split, _) {
  
  function iterator(args) {
    return partial(shift, [args]);
  }
  
  function mapper(template, next) {
    return map(template, function (a) { return different(a, _) ? a : next(); });
  }
  
  function validate(parameters) {
    return every(parameters, partial(different, [_]));
  }
  
  return function (a) {
    
    function curry(template) {
      return solve(mapper(template, iterator(slice(arguments, 1))));
    }
    
    function solve(parameters) {
      return validate(parameters) ? apply(a, parameters) : partial(curry, [parameters]);
    }
    
    return partial(curry, [sparse(a.length)]);
    
  };
  
});