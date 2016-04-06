Rex('route.query', [
  
    'join'
  , 'lambda'
  , 'get'
  , 'map'
  , 'reduce'
  , 'set'
  , 'slice'
  , 'split'
  
], function (join, lambda, get, map, reduce, set, slice, split) {
  
  function callback(query, item) {
    return set(query, get(item, 0), get(item, 1, ''));
  }
  
  return function () {
    return reduce(map(split(join(slice(window.location.search, 1), ''), '&'), lambda('(a) => a.split("=")')), callback, {});
  };
  
});