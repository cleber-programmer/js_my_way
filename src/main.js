(function (cache, components, modules) {

  function build(a, b) {
    return { 'callback': b, 'dependencies': a };
  }
  
  function error(a) {
    throw new ReferenceError('The ' + a + ' module is not defined');
  }
  
  function inject(a) {
    return cache[a] || (cache[a] = mapper(components[a] || error(a)));
  }
  
  function mapper(a) {
    return a.callback.apply(a, a.dependencies.map(inject));
  }
  
  _overload(this, '$', function (a, b) {
    modules.push(build(a, b));
  });
  
  _overload(this, '$', function (a, b, c) {
    Object.defineProperty(components, a, { value: build(b, c) });
  });
  
  window.addEventListener('load', function () {
    modules.forEach(mapper);
  });

}).call(this, {}, {}, []);