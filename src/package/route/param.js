Rex('route.param', [
  
  'get',
  'join',
  'reduce',
  'set',
  'slice',
  'split',
  'test'


], function (get, join, reduce, set, slice, split, test) {
  
  return function (url) {
    return reduce(split(url, '/'), function (previous, path, index) {
      return test(/^\:\w+/i, path) ? set(previous, join(slice(path, 1), ''), get(split(window.location.pathname, '/'), index, '')) : previous;
    }, {});
  };

});