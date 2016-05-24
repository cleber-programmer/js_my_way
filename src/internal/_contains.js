(function (context) {
  
  context._contains = function (array, item) {
    return !(array.indexOf(item) == -1);
  };
  
})(this);