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
  'route.param',
  'route.query'

], function (equal, every, forEach, get, keys, split, test, compare, handler, param, query) {

  function callback(url) {
    every(split(url, '/'), compare) && handler[url](window.history.state, param(url), query());
  }

  return window.onpopstate = function () {
    forEach(keys(handler), callback);
  };

});