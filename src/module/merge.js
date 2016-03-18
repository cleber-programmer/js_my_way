Rex('merged', [

  'extend',
  'keys',
  'pick'

], function (extend, keys, pick) {

  return function (merged, original) {
    return extend(merged, pick(keys(merged), original));
  };
  
});