Rex('always', [], function () {
  
  return function (a) {
    return function () { return a; };
  };
  
});