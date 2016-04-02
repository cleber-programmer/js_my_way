Rex('route.init', [

  'equal',
  'every',
  'forEach',
  'get',
  'keys',
  'split',
  'test',
  'route.compare',
  'route.handler',
  'route.param'

], function (equal, every, forEach, get, keys, split, test, compare, handler, param) {

  function callback(url) {
    every(split(url, '/'), compare) && handler[url](window.history.state, param(url));
  }

  return window.onpopstate = function () {
    forEach(keys(handler), callback);
  };

});