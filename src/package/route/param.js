Rex('route.param', [
  
  'get',
  'reduce',
  'set',
  'slice',
  'split',
  'test'


], function (get, reduce, set, slice, split, test) {
  
  return function (url) {
    return reduce(split(url, '/'), function (previous, path, index) {
      return test(/^\:\w+/i, path) ? set(previous, slice(path, 1), get(split(window.location.pathname, '/'), index, '')) : previous;
    }, {});
  };

});