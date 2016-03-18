Rex('clone', [], function () {
  
  return function (a) {
    return JSON.parse(JSON.stringify(a));
  };
  
});