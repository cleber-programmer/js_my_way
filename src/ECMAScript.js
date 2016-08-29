/* global Rex */
/* jshint esversion: 6 */

(() => {

  [

    /**
     * Colecao de metodos dos objetos Array, Number, Object e String
     */
    'charAt',
    'charCodeAt',
    'codePointAt',
    'concat',
    'copyWithin',
    'endsWith',
    'entries',
    'every',
    'fill',
    'filter',
    'find',
    'findIndex',
    'fixed',
    'fontcolor',
    'fontsize',
    'forEach',
    'hasOwnProperty',
    'includes',
    'indexOf',
    'isPrototypeOf',
    'italics',
    'join',
    'keys',
    'lastIndexOf',
    'link',
    'localeCompare',
    'map',
    'match',
    'normalize',
    'pop',
    'propertyIsEnumerable',
    'push',
    'reduce',
    'reduceRight',
    'repeat',
    'replace',
    'reverse',
    'search',
    'shift',
    'slice',
    'small',
    'some',
    'sort',
    'splice',
    'split',
    'startsWith',
    'strike',
    'sub',
    'substr',
    'substring',
    'sup',
    'toExponential',
    'toFixed',
    'toLocaleLowerCase',
    'toLocaleString',
    'toLocaleUpperCase',
    'toLowerCase',
    'toPrecision',
    'toString',
    'toUpperCase',
    'trim',
    'trimLeft',
    'trimRight',
    'unshift',
    'valueOf',
    'values'

  /**
   * Construtor de modulos com metodos da colecao acima
   */
  ].forEach(
    (method) =>
        Rex(method, () => (object, ...parameters) => object[method](...parameters)));

})();