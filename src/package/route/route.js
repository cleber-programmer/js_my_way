Rex('route', [

  'set',
  'route.handler'

], function (set, handler) {

  return function (url, callback) {
    set(handler, url, callback);
  }

});