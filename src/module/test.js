Rex('test', [], function () {
  
  return function (pattern, value) {
    return pattern.test(value);
  };
  
});