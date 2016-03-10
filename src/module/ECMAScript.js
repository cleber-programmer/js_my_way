(function () {
  
  function build(a) {
    (function (x) {

      $(x, [], function () {
        return function (a) {
          return a[x].apply(a, [].slice(arguments, 1));
        }
      });

    })(a);
  }
  
  function mapper(a, b) {
    return a.concat(Object.getOwnPropertyNames(b).reduce(solve.bind(null, b), []));
  }
  
  function solve(a, b, c) {
    return (typeof a[c] == 'function' && b.push(c)), b;
  }

  _uniq([Object, Object.prototype, Array, Array.prototype, Number, Number.prototype, String, String.prototype].reduce(mapper, [])).forEach(build);

})(this);