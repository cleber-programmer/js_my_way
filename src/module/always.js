Rex('always', [], function () {
  
  return function always(a) {
    return function () { return a; };
  };
  
});