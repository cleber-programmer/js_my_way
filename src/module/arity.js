this.$('arity', ['apply'], function (apply) {
  
  return function (number, func) {
    switch (number) {
      
      case 0: return function()               { return apply(func, arguments); };
      case 1: return function(a0)             { return apply(func, arguments); };
      case 2: return function(a0, a1)         { return apply(func, arguments); };
      case 3: return function(a0, a1, a2)     { return apply(func, arguments); };
      case 4: return function(a0, a1, a2, a3) { return apply(func, arguments); };
      
      default: throw new Error('First argument to arity must be a non-negative integer no greater than four');
      
    }
  };
  
});