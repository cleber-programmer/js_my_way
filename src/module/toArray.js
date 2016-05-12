Rex('toArray', [], function () {
  
  return function (a) {
    return [].slice.call(a);
  };
  
});