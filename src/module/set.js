Rex('set', [], function () {

  return function (object, key, value) {
    return object[key] = value, object;
  };

});