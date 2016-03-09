(function () {
  
  function build(a) {
    (function (a) {
      $(a, [], function (b) {
        return b[a].apply(b, [].slice(arguments, 1));
      });
    })(a);
  }
  
  function mapper(a, b) {
    return a.concat(Object.getOwnPropertyNames(b).reduce(solve, []));
  }
  
  function solve(a, b) {
    return (typeof b == 'function' && a.push(b)), a;
  }

  _uniq([Object, Object.prototype, Array, Array.prototype, Number, Number.prototype, String, String.prototype].reduce(mapper, [])).forEach(build);

}).call(this);