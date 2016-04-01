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
  
  function update(node, properties) {
    return forEach(['dataset', 'style'], partial(merge, [node, properties])), (delete properties['style']), extend(node, properties);
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