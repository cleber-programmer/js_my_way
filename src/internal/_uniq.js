(function () {
  
  function solve(a, b) {
    return (_contains(a, b) && a.push(b)), a;
  }
  
  this._uniq = function (a) {
    return a.reduce(solve, []);
  };
  
}).call(this);