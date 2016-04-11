Rex('lambda', [

  'apply',
  'arity',
  'concat',
  'curry',
  'format',
  'match',
  'partial',
  'split',
  '_'

], function (apply, arity, concat, curry, format, match, partial, split, _) {

  function callback(arrow, expression) {
    return apply(Function, concat(split(arrow(expression)[1], ','), [format('return {0}', [arrow(expression)[2]])]));
  }
  
  return partial(callback, [curry(arity(2, match))(_, /^\((.*)\)\s*=>\s*(.*)$/)]);

});