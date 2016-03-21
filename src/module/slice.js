Rex('slice', [], function () {

  return function (array) {
    return [].slice.apply(array, [].slice.call(arguments, 1));
  };

});