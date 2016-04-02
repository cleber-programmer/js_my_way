Rex('route.init', [

  'equal',
  'every',
  'forEach',
  'get',
  'keys',
  'split',
  'test',
  'route.handler',
  'route.param'

], function (equal, every, forEach, get, keys, split, test, handler, param) {

  function callback(url) {
    every(split(url, '/'), compare) && handler[url](window.history.state, param(url));
  }

  function compare(path, index) {
    return test(/^\:\w+/i, path) ? !0 : equal(get(split(window.location.pathname, '/'), index, ''), path);
  }

  return window.onpopstate = function () {
    forEach(keys(handler), callback);
  };

});