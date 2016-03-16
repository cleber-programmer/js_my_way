(function (context) {

  function callback(value, previous, item) {
    return ((value != item) && previous.push(item)), previous;
  }

  context._remove = function (array, value) {
    return array.reduce(callback.bind(null, value), []);
  };

})(this);