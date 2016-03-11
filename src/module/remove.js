this.$('remove', [], function () {

  function solve(a, b, c) {
    return (a != c && b.push(c)), b;
  }

  return function (a, b) {
    return a.reduce(solve.bind(b), []);
  }

});