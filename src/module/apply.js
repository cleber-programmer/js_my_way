Rex('apply', [], function () {

  return function (object, parameters) {
    return object.apply(object, parameters);
  };

});