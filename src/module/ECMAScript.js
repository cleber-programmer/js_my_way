(function (context) {

  function clear(array) {
    return ['apply', 'keys', 'slice'].reduce(context._remove, array);
  }

  function build(item) {
    (function (name) {

      context.Rex(name, [], function () {
        return function (object) {
          return object[name].apply(object, [].slice.call(arguments, 1));
        }
      });

    })(item);
  }

  function mapper(previous, item) {
    return previous.concat(Object.getOwnPropertyNames(item).reduce(solve.bind(null, item), []));
  }

  function solve(predicate, previous, item) {
    return (typeof predicate[item] == 'function' && previous.push(item)), previous;
  }

  clear(context._uniq([

    Array.prototype,
    Number.prototype,
    Object.prototype,
    String.prototype
    
  ].reduce(mapper, []))).forEach(build);

})(this);