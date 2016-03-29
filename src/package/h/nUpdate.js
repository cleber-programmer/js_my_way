Rex('h.nUpdate', [

  'cond',
  'forEach',
  'get',
  'or',
  'partial',
  'set',
  'h.isNode',
  'h.isText',
  'h.nExtend'

], function (cond, forEach, get, or, partial, set, isNode, isText, nExtend) {
  
  function merge(node, properties, key) {
    return nExtend(get(node, key), or(get(properties, key), {}));
  }
  
  function update(node, properties) {
    return forEach(['style', 'dataset'], partial(merge, [node, properties])), nExtend(node, properties);
  }
  
  function updateNode(node, vDOM) {
    return update(node, get(vDOM, 'properties'));
  }
  
  function updateText(node, vDOM) {
    return set(node, 'textContent', get(vDOM, 'textContent')), node;
  }
  
  return cond([
    [isNode, updateNode],
    [isText, updateText]
  ]);
  
});