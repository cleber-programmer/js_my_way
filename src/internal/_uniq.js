(function (context) {
  
  function solve(previous, item) {
    return !_contains(previous, item) && previous.push(item), previous;
  }
  
  context._uniq = function (array) {
    return array.reduce(solve, []);
  };
  
})(this);