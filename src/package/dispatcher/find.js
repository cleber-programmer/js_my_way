Rex('dispatcher.find', [
  
    'get'
  , 'dispatcher.handler'
  
], function (get, handler) {
  
  return function (channel) {
    return get(handler, channel) || (handler[channel] = []);
  };
  
});