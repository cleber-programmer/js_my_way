this.Rex('format', [
  
  'or',
  'partial',
  'replace',
  'translation'

], function (or, partial, replace, translation) {
  
  function solve(parameters, _, gap, pattern, mask) {
    return pattern ? translation(mask, or(parameters[gap], '')) : or(parameters[gap], '');
  }
  
  return function (literal, parameters) {
    return replace(literal, /{(\d+)(:(.*?))?}/g, partial(solve, [parameters]));
  };
  
});