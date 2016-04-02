Rex('dispatcher.off', [
  
    'filter'
  , 'indexOf'
  , 'partial'
  , 'splice'
  , 'dispatcher.compare'
  , 'dispatcher.find'
  
], function (filter, indexOf, partial, splice, compare, find) {
  
  function solve(channel, callback, context) {
    return splice(channel, indexOf(channel, filter(channel, partial(compare, [callback, context]))[0]), 1);
  }
  
  return function (channel, callback, context) {
    solve(find(channel), callback, context);
  };
  
});