Rex('h.nUpdate', [

  'cond',
  'extend',
  'forEach',
  'get',
  'or',
  'partial',
  'set',
  'h.isNode',
  'h.isText'

], function (cond, extend, forEach, get, or, partial, set, isNode, isText) {

  function merge(node, properties, key) {
    return extend(get(node, key), or(get(properties, key), {}));
  }
  
  function solve(node, properties) {
    return forEach(['style', 'dataset'], partial(merge, [node, properties])), extend(node, properties);
  }
  
  function updateNode(node, vDOM) {
    return solve(node, get(vDOM, 'properties'));
  }
  
  function updateText(node, vDOM) {
    return set(node, 'textContent', get(vDOM, 'textContent')), node;
  }
  
  return cond([
    [isNode, updateNode],
    [isText, updateText]
  ]);
  
});