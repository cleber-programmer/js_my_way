this.$('remove', [], function () {

  function callback(predicate, previous, item) {
    return ((predicate != item) && previous.push(item)), previous;
  }

  return function (array, item) {
    return array.reduce(callback.bind(null, item), []);
  }

});