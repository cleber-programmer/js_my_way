(() => {

  [
  
    /**
     * Colecao de operadores de comparacao e aritimeticos
     */
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

  /**
   * Construtor de modulos com operadores da colecao acima
   */
  ].forEach(
    ([name, operator]) =>
      Rex(name, () => Function(...['a', 'b', `return a ${operator} b`])))

})();