Rex('h', [
  
  'h.parseChild',
  'h.parseProperty',
  'h.parseTag',
  'h.vNode'

], function (parseChild, parseProperty, parseTag, vNode) {
  
  function solve(tagName, property, children) {
    return vNode(parseTag(tagName, property), property, children);
  }
  
  return function (tagName, property, children) {
    return solve(tagName, parseProperty(property), parseChild(children, property));
  };
  
});