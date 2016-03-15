(function (context) {

  function build(item) {
    (function (name, operator) {

      context.Rex(name, [], function () {
        return Function.apply(null, ['a', 'b'].concat('return a ' + operator + ' b'));
      });

    }).apply(null, item);
  }

  [
    ['add', '+'],
    ['and', '&&'],
    ['div', '/'],
    ['equal', '=='],
    ['gt', '>'],
    ['gte', '>='],
    ['lt', '<'],
    ['lte', '<='],
    ['mul', '*'],
    ['or', '||'],
    ['rem', '%'],
    ['sub', '-']

  ].forEach(build);

})(this);