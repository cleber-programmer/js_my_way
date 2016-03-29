Rex('h.repaint', [
  
  'and',
  'cond',
  'different',
  'equal',
  'get',
  'f',
  't',
  'h.nExchange',
  'h.nInsert',
  'h.nRemove',
  'h.nUpdate'
  
], function (and, cond, different, equal, get, f, t, nExchange, nInsert, nRemove, nUpdate) {
  
  function gap(node, vDOM) {
    return and(equal(!!node, false), equal(!!vDOM, false));
  }
  
  function remove(node, vDOM) {
    return and(equal(!!node, true), equal(!!vDOM, false));
  }
  
  function exchange(node, vDOM) {
    return different(get(node, 'tagName'), get(vDOM, 'tagName'));
  }
  
  function insert(node, vDOM) {
    return and(equal(!!node, false), equal(!!vDOM, true));
  }
  
  return cond([
    [gap, f],
    [remove, nRemove],
    [insert, nInsert],
    [exchange, nExchange],
    [t, nUpdate]
  ]);
  
});