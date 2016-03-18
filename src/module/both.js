Rex('both', ['apply'], function (apply) {
  
  return function (func1, func2) {
    return function () {
      return apply(func1, arguments) && apply(func2, arguments);
    };
  };
  
});