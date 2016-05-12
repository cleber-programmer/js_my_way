Rex('translation', [

  'iterator',
  'join',
  'map',
  'partial',
  'reverse',
  'test',
  'toArray'

], function (iterator, join, map, partial, reverse, test, toArray) {

  var hash = {
    
    '9': partial(char, [/[0-9]/]),
    'A': partial(char, [/[a-zA-Z]/]),
    '#': partial(char, [/[a-zA-Z0-9]/]),
    
    '.': partial(gap, [/[\.]/]),
    ',': partial(gap, [/[\,]/]),
    ':': partial(gap, [/[\:]/]),
    '-': partial(gap, [/[\-]/]),
    '/': partial(gap, [/[\/]/]),
    '(': partial(gap, [/[\(]/]),
    ')': partial(gap, [/[\)]/]),
    ' ': partial(gap, [/[\ ]/])
    
  };
  
  function char(pattern, iterator, caracter) {
    return solve(pattern, iterator) || mapper(iterator, caracter);
  }
  
  function gap(pattern, iterator, caracter) {
    return solve(pattern, iterator) || (iterator.prev() && caracter);
  }
  
  function mapper(iterator, caracter) {
    return iterator.hasNext ? hash[caracter](iterator, caracter) : null;
  }
  
  function solve(pattern, iterator) {
    return test(pattern, iterator.next()) ? iterator.current : !1;
  }
  
  return function (mask, value, inverse) {

    return (function (inverse) {
      return join(inverse(map(inverse(toArray(mask)), partial(mapper, [iterator(inverse(toArray(value)))]))), '');
    })
    (
        inverse
      ? reverse
      : function (a) { return a; }
    );

  };
  
});