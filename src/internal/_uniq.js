(function (context) {
  
  function callback(previous, item) {
    return !context._contains(previous, item) && previous.push(item), previous;
  }
  
  context._uniq = function (array) {
    return array.reduce(callback, []);
  };
  
})(this);