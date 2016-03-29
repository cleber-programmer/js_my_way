Rex('h.nExtend', [

  'curry',
  'get',
  'keys',
  'reduce',
  'set',
  '_'

], function (curry, get, keys, reduce, set, _) {
  
  function extend(node, properties, key) {
    return set(node, key, get(properties, key, ''));
  }

  return function (node, properties) {
    return reduce(keys(properties), curry(extend)(_, properties, _), node);
  };
  
});