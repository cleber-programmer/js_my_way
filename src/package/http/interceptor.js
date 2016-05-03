Rex('http.interceptor', [
  
  'curry',
  'get',
  'or',
  'reduce',
  'http.handler',
  '_'

], function (curry, get, or, reduce, handler, _) {

  function gap(method, url, data, xhr) {
    return data;
  }

  function transform(step, method, url, data, xhr, interceptor) {
    return or(get(interceptor, step), gap)(method, url, data, xhr);
  }
  
  return function (step, method, url, data, xhr) {
    return reduce(handler, curry(transform)(step, method, url, _, xhr, _), data);
  };
  
});