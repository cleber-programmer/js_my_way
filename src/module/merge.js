this.$('merged', [

  'forEach',
  'get',
  'hasOwnProperty',
  'keys',
  'set'

], function (forEach, get, has, keys, set) {

  return function (merged, original) {

    function callback(key) {
      has(merged, key) && set(merged, key, get(original, key));
    }

    return forEach(keys(original), calback), merged;

  };
  
});