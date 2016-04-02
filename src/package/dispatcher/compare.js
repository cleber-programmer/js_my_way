Rex('dispatcher.compare', [
  
    'and'
  , 'equal'
  , 'get'
  
], function (and, equal, get) {
  
  return function (callback, context, channel) {
    return and(equal(get(channel, 'callback'), callback), equal(get(channel, 'context'), context));
  };
  
});