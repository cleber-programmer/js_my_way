Rex('lambda', [

  'apply',
  'concat',
  'curry',
  'format',
  'match',
  'partial',
  'split',
  '_'

], function (apply, concat, curry, format, match, partial, split, _) {

  function lambda(arrow, expression) {
    return apply(Function, concat(split(arrow(expression)[1], ','), [format('return {0}', [arrow(expression)[2]])]));
  }
  
  return partial(lambda, [curry(match)(_, /^\((.*)\)\s*=>\s*(.*)$/)]);

});