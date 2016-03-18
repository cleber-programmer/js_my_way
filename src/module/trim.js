Rex('trim', ['or'], function (or) {
  
  return function (value) {
    return or(value, '').trim();
  };
  
});