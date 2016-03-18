Rex('sparse', [
  
  'always',
  'map',
  'split',
  '_'
  
], function (always, map, split, _) {
  
  return function sparse(size) {
    return !!size ? map(split(Array(size).toString(), ','), always(_)) : [];
  };
  
});