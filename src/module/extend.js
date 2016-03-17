this.$('extend', [

  'forEach',
  'get',
  'keys',
  'set'

], function (forEach, get, keys, set) {

  return function (extended, original) {

    function callback(key) {
     && set(extended, key, get(original, key));
    }

    return forEach(keys(original), calback), extended;

  };
  
});