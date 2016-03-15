this._overload = function (object, name, callback) {

  (function (method) {
    object[name] = function () {
      return (callback.length == arguments.length ? callback : (method || callback)).apply(null, arguments);
    };
  })(object[name]);

};