(function (cache, context, components, modules) {

  function build(dependencies, callback) {
    return { 'callback': callback, 'dependencies': dependencies };
  }
  
  function error(name) {
    throw new ReferenceError('The ' + name + ' module is not defined');
  }
  
  function inject(name) {
    return cache[name] || (cache[name] = mapper(components[name] || error(name)));
  }
  
  function mapper(module) {
    return module.callback.apply(null, module.dependencies.map(inject));
  }
  
  context._overload(this, '$', function (dependencies, callback) {
    modules.push(build(dependencies, callback));
  });
  
  context._overload(this, '$', function (name, dependencies, callback) {
    Object.defineProperty(components, name, { value: build(dependencies, callback) });
  });
  
  window.addEventListener('load', function () {

    context._overload(this, '$', function (dependencies, callback) {
      mapper(build(dependencies, callback));
    });

    modules.forEach(mapper);

  });

})({}, this, {}, []);