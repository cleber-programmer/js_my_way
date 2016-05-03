Rex('http.interceptor', [
  
  'curry',
  'get',
  'or',
  'reduce',
  'http.handler',
  '_'

], function (curry, get, or, reduce, handler, _) {

  function gap(data) {
    return data;
  }

  function transform(method, data, xhr, interceptor) {
    return or(get(interceptor, method), gap)(data, xhr);
  }
  
  return function (method, data, xhr) {
    return reduce(handler, curry(transform)(method, _, xhr, _), data);
  };
  
});