Rex('h.cElement', [
  
  'apply',
  'cond',
  'get',
  'reduce',
  'h.isNode',
  'h.isText',
  'h.nUpdate'
  
], function (apply, cond, get, reduce, isNode, isText, nUpdate) {
  
  function createChild(node, vDOM) {
    return node.appendChild(solve(vDOM)), node;
  }
  
  function createText(vDOM) {
    return document.createTextNode(get(vDOM, 'textContent'));
  }
  
  function createElement(vDOM) {
    return reduce(get(vDOM, 'childNodes'), createChild, nUpdate(document.createElement(get(vDOM, 'tag')), vDOM));
  }

  function solve() {
    return apply(cond([
      [isNode, createElement],
      [isText, createText]
    ]), arguments);
  }
  
  return solve;
  
});