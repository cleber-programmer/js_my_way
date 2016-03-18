Rex('uid', [], function () {
  
  return function () {
    return window.parseInt(Date.now() * Math.random()).toString(36);
  };
  
});