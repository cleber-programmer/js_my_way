(function (context) {

  context.Rex(['remove'], function (remove) {

    function clear(array) {
      return ['assign'].reduce(remove, array);
    }
    
    function build(item) {
      (function (method) {

        context.$(method, [], function () {
          return function (object) {
            return object[method].apply(object, [].slice.call(arguments, 1));
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
      Array,
      Number,
      Object,
      String,
      Array.prototype,
      Number.prototype,
      Object.prototype,
      String.prototype
    ].reduce(mapper, []))).forEach(build);

  });

})(this);