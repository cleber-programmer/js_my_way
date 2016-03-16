this.Rex('cond', [

  'apply',
  'partial',
  'slice'

], function (apply, partial, slice) {
  
  return function (chain) {    
    return function () {

      function callback(parameters, previous, item) {
        return apply(item[0], parameters) ? apply(item[1], parameters) : previous;
      }

      return reduce(chain, partial(callback, [arguments]));
      
    };
  };
  
});