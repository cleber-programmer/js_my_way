(() =>

  [
  
  	/**
  	 * Colecao de nomes de modulos com seu correspondente pattern
  	 */
    ['isArray', /\[object Array\]/],
    ['isNumber', /\[object Number\]/],
    ['isObject', /\[object Object\]/],
    ['isString', /\[object String\]/],
    ['isVNode', /\[object vNode\]/],
    ['isVText', /\[object vText\]/]

  /**
   * Construtor de modulos de verificacao de tipos
   */
  ].forEach(
    ([ name, pattern ]) =>
      Rex(name, ({ test }) => (object) => test(pattern, Object.prototype.toString.call(object))))

)();