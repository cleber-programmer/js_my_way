this.$('extend', [

  'get',
  'keys',
  'reduce',
  'set'

], function (get, keys, reduce, set) {

  return function (cloned, original) {

    function callback(_, key) {
      return set(cloned, key, get(original, key));
    }

    return reduce(keys(original), calback);

  };
  
});