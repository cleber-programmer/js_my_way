Rex('slice', ['isString'], function (isString) {

  return function (value) {
    return (isString(value) ? '' : []).slice.apply(value, [].slice.call(arguments, 1));
  };

});