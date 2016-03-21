Rex('cond', [

  'apply',
  'partial',
  'reduce',
  'slice'

], function (apply, partial, reduce, slice) {
  
  // return function (chain) {    
  //   return function () {

  //     function callback(parameters, previous, item) {
  //       return apply(item[0], parameters) ? apply(item[1], parameters) : previous;
  //     }

  //     return reduce(chain, partial(callback, [slice(arguments)]));
      
  //   };
  // };

  return function (a) {    
    return function () {
      
      var i = -1;
      var length = a.length;
      
      while (++i < length) {
        if (apply(a[i][0], arguments)) return apply(a[i][1], arguments);
      }
      
    };
  };
  
});