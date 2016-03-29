Rex('h.cElement', [
  
  'cond',
  'get',
  'reduce',
  'h.isNode',
  'h.isText',
  'h.nUpdate'
  
], function (cond, get, reduce, isNode, isText, nUpdate) {
  
  function createChild(node, vDOM) {
    return node.appendChild(solve(vDOM)), node;
  }
  
  function createText(vDOM) {
    return document.createTextNode(get(vDOM, 'textContent'));
  }
  
  function createElement(vDOM) {
    return reduce(get(vDOM, 'childNodes'), createChild, nUpdate(document.createElement(get(vDOM, 'tagName')), vDOM));
  }

  function solve(vDOM) {
    return cond([
      [isNode, createElement],
      [isText, createText]
    ])(vDOM);
  }
  
  return solve;
  
});