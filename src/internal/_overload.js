this._overload = function (a, b, c) {

  (function (x) {
    a[b] = function () {
      return (c.length == arguments.length ? c : (x || c)).apply(null, arguments);
    };
  })(a[b]);

};