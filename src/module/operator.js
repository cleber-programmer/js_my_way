(function (context) {

  [
  
    ['add',       '+'],
    ['and',       '&&'],
    ['different', '!='],
    ['divide',    '/'],
    ['equal',     '=='],
    ['gt',        '>'],
    ['gte',       '>='],
    ['lt',        '<'],
    ['lte',       '<='],
    ['mod',       '%'],
    ['multiply',  '*'],
    ['or',        '||'],
    ['subtract',  '-']

  ].forEach(function (item) {
    (function (name, operator) {

      context.Rex(name, [], function () {
        return Function.apply(null, ['a', 'b'].concat('return a ' + operator + ' b'));
      });

    }).apply(null, item);
  });

})(this);