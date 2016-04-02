Rex('dispatcher.on', [

    'push'
  , 'dispatcher.find'

], function (push, find) {
  
  return function (channel, callback, context) {
    push(find(channel), { callback: callback, context: context });
  };
  
});