Rex('h.parseTag', [
  
  'both',
  'charAt',
  'compose',
  'concat',
  'curry',
  'equal',
  'get',
  'join',
  'or',
  'partial',
  'reduce',
  'set',
  'split',
  'substring',
  'test',
  'toUpperCase',
  'trim',
  '_'

], function (both, charAt, compose, concat, curry, equal, get, join, or, partial, reduce, set, split, substring, test, toUpperCase, trim, _) {
  
  function compare(value, char) {
    return equal(charAt(value, 0), char);
  }
  
  function id(property, h) {
    return both(curry(compare)(_, '#'), compose(partial(set, [property, 'id']), sub))(h), h;
  }
  
  function klass(property, h) {
    return both(curry(compare)(_, '.'), compose(partial(set, [property, 'className']), partial(names, [property])))(h), h;
  }
  
  function names(property, h) {
    return trim(join(concat(split(get(property, 'className', ''), ' '), [sub(h)]), ' '));
  }
  
  function solve(property, tagName, h) {
    return compose(partial(klass, [property]), partial(id, [property]))(h), testTag(tagName, h);
  }
  
  function sub(h) {
    return substring(h, 1, get(h, 'length'));
  }
  
  function testTag(tagName, h) {
    return test(/^\.|#/, h) ? tagName : or(h, tagName);
  }
  
  return function (tagName, property) {
    return toUpperCase(reduce(split(tagName, /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/), partial(solve, [or(property, {})]), 'DIV'));
  };
  
});