Rex('semaphore', [
  
  'apply',
  'curry',
  'each',
  'gt',
  'partial',
  'push',
  '_'

], function (apply, curry, each, gt, partial, push, _) {
  
  return partial(function (a, b) {
    
    function controller(c, d) {
      
      if (this._result) {
        return void(d(this._result));
      }
  
      push((this._listeners = this._listeners || []), d);
  
      if (gt(this._listeners.length, 1)) {
        return;
      }
      
      function response(data) {
        each(this._listeners, curry(apply)(_, [this._result = data]));
      }
  
      b(c, response.bind(this));
      
    }
    
    function resolve(x) {
      return a[x] = a[x] || controller.bind({});
    }
    
    return function (a, b) {
      resolve(JSON.stringify(a))(a, b);
    };
    
  }, [{}]);
  
});