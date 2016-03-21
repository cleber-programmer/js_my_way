Rex('http.interceptor', [
  
  'curry',
  'get',
  'or',
  'reduce',
  'http.interceptor.json',
  '_'

], function (curry, get, or, reduce, json, _) {

  return (function (interceptors) {

    function gap(data) {
      return data;
    }

    function transform(method, data, xhr, interceptor) {
      return or(get(interceptor, method), gap)(data, xhr);
    }
    
    return function (method, data, xhr) {
      return reduce(interceptors, curry(transform)(method, _, xhr, _), data);
    };

  })
  ([json]);
  
});