Rex('dispatcher.trigger', [
  
    'forEach'
  , 'dispatcher.find'
  
], function (forEach, find) {
  
  return function (channel, parameters) {
    
    function callback(item) {
      item.callback.call(item.context || item.callback, parameters);
    }
    
    forEach(find(channel), callback);
    
  };
  
});