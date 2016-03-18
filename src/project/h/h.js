Rex('h', [
  
  'h.parseChild',
  'h.parseProperty',
  'h.parseTag',
  'h.vNode'

], function (parseChild, parseProperty, parseTag, vNode) {
  
  function solve(tag, property, children) {
    return vNode(parseTag(tag, property), property, children);
  }
  
  return function (tag, property, children) {
    return solve(tag, parseProperty(property), parseChild(children, property));
  };
  
});