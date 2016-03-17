this.$('dispatcher', [

  'and',
  'equal',
  'filter',
  'forEach',
  'get',
  'indexOf',
  'partial',
  'push',
  'splice'

], function dispatcher(and, equal, filter, forEach, get, indexOf, partial, push, splice) {
  
  return (function (listeners) {
    
    function compare(callback, context, channel) {
      return and(equal(get(channel, 'callback'), callback), equal(get(channel, 'context'), context));
    }
    
    function find(channel) {
      return get(listeners, channel) || (listeners[channel] = []);
    }
    
    function solve(channel, callback, context) {
      return splice(channel, indexOf(channel, filter(channel, partial(compare, [callback, context]))[0]), 1);
    }
    
    return {
      
      off: function (channel, callback, context) {
        return solve(find(channel), callback, context), this;
      },
      
      on: function (channel, callback, context) {
        return push(find(channel), { callback: callback, context: context }), this;
      },
      
      new: function () {
        return dispatcher(and, equal, filter, forEach, get, indexOf, partial, push, splice);
      },
      
      trigger: function (channel, parameters) {
        return forEach(find(channel), function (item) {
          item.callback.call(item.context || item.callback, parameters);
        }), this;
      }

    };

  })({});
  
});