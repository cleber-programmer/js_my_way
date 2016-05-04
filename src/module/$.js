Rex('$', ['or'], function (or) {
  
  return function (selector, node) {
    return or(node, document).querySelector(selector);
  };
  
});