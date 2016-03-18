Rex('abacaxi', [

  'get',
  'set'

], function (get, set) {

  return function (object1, object2, key) {
    return set(object1, key, get(object2, key));
  };
  
});