Rex('http.urlParameter', [

  'format',
  'get',
  'join',
  'keys',
  'map'

], function (format, get, join, keys, map) {
  
  return function (object) {
    return join(map(keys(object), function (key) {
      return format('{0}={1}', [key, get(object, key, '')]);
    }), '&');
  };
  
});