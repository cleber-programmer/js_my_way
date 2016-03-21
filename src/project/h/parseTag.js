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
  'trim',
  '_'

], function (both, charAt, compose, concat, curry, equal, get, join, or, partial, reduce, set, split, substring, test, trim, _) {
  
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
  
  function solve(property, tag, h) {
    return compose(partial(klass, [property]), partial(id, [property]))(h), testTag(tag, h);
  }
  
  function sub(h) {
    return substring(h, 1, get(h, 'length'));
  }
  
  function testTag(tag, h) {
    return test(/^\.|#/, h) ? tag : or(h, tag);
  }
  
  return function (tag, property) {
    return reduce(split(tag, /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/), partial(solve, [or(property, {})]), 'div');
  };
  
});