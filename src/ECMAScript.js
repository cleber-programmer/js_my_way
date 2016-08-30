/* global Rex */
/* jshint esversion: 6 */

(() => {

  /**
   * Colecao de metodos dos objetos Array, Number, Object e String
   */
  [

    'charAt',           'endsWith',       'fill',                       'hasOwnProperty',         'includes',             'join',                   'keys',           'lastIndexOf',
    'charCodeAt',       'entries',        'filter',                                               'indexOf',                                                          'link',
    'codePointAt',      'every',          'find',                                                 'isPrototypeOf',                                                    'localeCompare',
    'concat',                             'findIndex',                                            'italics',
    'copyWithin',                         'fixed',
                                          'fontcolor',
                                          'fontsize',
                                          'forEach',


    'map',              'normalize',      'pop',                        'reduce',                 'search',               'toExponential',          'unshift',        'valueOf',
    'match',                              'propertyIsEnumerable',       'reduceRight',            'shift',                'toFixed',                                  'values',
                                          'push',                       'repeat',                 'slice',                'toLocaleLowerCase',
                                                                        'replace',                'small',                'toLocaleString',
                                                                        'reverse',                'some',                 'toLocaleUpperCase',
                                                                                                  'sort',                 'toLowerCase',
                                                                                                  'splice',               'toPrecision',
                                                                                                  'split',                'toString',
                                                                                                  'startsWith',           'toUpperCase',
                                                                                                  'strike',               'trim',
                                                                                                  'sub',                  'trimLeft',
                                                                                                  'substr',               'trimRight',
                                                                                                  'substring',
                                                                                                  'sup',

  /**
   * Construtor de modulos com metodos da colecao acima
   */
  ].forEach(
    (method) =>
        Rex(method, () => (object, ...parameters) => object[method](...parameters)));

})();