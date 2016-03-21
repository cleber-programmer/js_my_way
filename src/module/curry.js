Rex('curry', [
  
  'apply',
  'different',
  'every',
  'map',
  'partial',
  'slice',
  'sparse',
  'split',
  '_'

], function (apply, different, every, map, partial, slice, sparse, split, _) {
  
  function iterator(args) {
    return function () {
      return args.shift();
    }
  }
  
  function mapper(template, next) {
    return map(template, function (parameter) {
      return different(parameter, _) ? parameter : next();
    });
  }
  
  function validate(parameters) {
    return every(parameters, partial(different, [_]));
  }
  
  return function (func) {
    
    function curry(template) {
      return solve(mapper(template, iterator(slice(arguments, 1))));
    }
    
    function solve(parameters) {
      return validate(parameters) ? apply(func, parameters) : partial(curry, [parameters]);
    }
    
    return partial(curry, [sparse(func.length)]);
    
  };
  
});