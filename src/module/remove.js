this.$('remove', [], function () {

  function solve(predicate, previous, item) {
    return ((predicate != item) && previous.push(item)), previous;
  }

  return function (array, item) {
    return array.reduce(solve.bind(null, item), []);
  }

});