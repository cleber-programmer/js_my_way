Rex('route.compare', [
  
  'equa',
  'get',
  'split',
  'test'
  
], function (equal, get, split, test) {
  
  return function compare(path, index) {
    return test(/^\:\w+/i, path) ? !0 : equal(get(split(window.location.pathname, '/'), index, ''), path);
  };

});