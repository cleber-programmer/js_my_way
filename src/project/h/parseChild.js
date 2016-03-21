Rex('h.parseChild', [

  'arity',
  'cond',
  'curry',
  'flip',
  'isArray',
  'isNumber',
  'isString',
  'or',
  'push',
  'reduce',
  't',
  'h.isNode',
  'h.isText',
  'h.vText',
  '_'

], function (arity, cond, curry, flip, isArray, isNumber, isString, or, push, reduce, t, isNode, isText, vText, _) {
  
  function addArray(vDOM, children) {
    return reduce(vDOM, curry(arity(2, flip(solve))), children);
  }
  
  function addNumber(vDOM, children) {
    return addString(String(vDOM), children);
  }
  
  function addString(vDOM, children) {
    return push(children, vText(vDOM)), children;
  }
  
  function addvDOM(vDOM, children) {
    return push(children, vDOM), children;
  }
  
  function gap(_, children) {
    return children;
  }

  function solve(vDOM, children) {
    return cond([
      [isString, addString],
      [isNumber, addNumber],
      [isArray, addArray],
      [isText, addvDOM],
      [isNode, addvDOM],
      [t, gap]
    ])(vDOM, children);
  }
  
  return function (children, properties) {
    return solve(or(or(children, properties), {}), []);
  };
  
});