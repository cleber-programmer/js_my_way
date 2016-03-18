Rex('memoize', [

  'apply',
  'partial'

], function (apply, partial) {

  return partial(function (cache, func) {

    function solve(key, parameters) {
      return cache[key] || (cache[key] = apply(func, parameters));
    }
    
    return function () {
      return solve(JSON.stringify(arguments), arguments);
    };
    
  }, [{}]);
  
});