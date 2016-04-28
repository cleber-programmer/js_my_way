Rex('$', ['$$', 'get', 'or'], function ($$, or) {
  
  return function (selector, node) {
    return get($$(selector, node), 0, null);
  };
  
});

Rex('$$', ['or'], function (or) {
  
  return function (selector, node) {
    return or(node, document).querySelectoAll(selector);
  };
  
});