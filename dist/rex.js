'use strict';

(function (modules, target) {
  Object.assign(window, {

    /**
     * Baseado no Sandbox Pattern, um tipo de caixa preta onde registra e consome modulos
    * atraves de getter e setter
     */
    Rex: function Rex(nameOrModule, module) {
      return module ? target[nameOrModule] = module : modules.push(nameOrModule);
    },

    /**
     * Aguarda o evento onload para iniciar a execucao dos modulos/getter
     */
    onload: function onload() {
      return modules.forEach(function (module) {
        return module(target);
      });
    }

  });
})([], new Proxy({ '@': {} }, {

  /**
   * Baseado no Singleton Pattern, intercepta o getter de dependencia inicializando o modulo
   * ou retorna o cache trabalhando com um Memoize Pattern
   */
  get: function get(target, name, receiver) {
    return target['@'][name] || (target['@'][name] = target[name](receiver));
  }

}));
'use strict';

Rex('$', function () {
	return (

		/**
   * Retorna o primeiro elemento dentro do documento que corresponde
   * ao grupo especificado de seletores
   */
		function (selector) {
			return document.querySelector(selector);
		}
	);
});
'use strict';

Rex('always', function () {
	return (

		/**
   * Retorna uma funcao que sempre retorna o valor dado
   * Note-se que para os nao-primitivas o valor devolvido e uma
   * referencia para o valor original
   */
		function (value) {
			return function () {
				return value;
			};
		}
	);
});
'use strict';

Rex('apply', function () {
	return (

		/**
   * Executa uma função passando a colecao "parameters"
   * como seus argumentos
   */
		function (predicate, parameters) {
			return predicate.apply(predicate, parameters);
		}
	);
});
'use strict';

Rex('assign', function () {
	return (

		/**
   * Copia os valores de todas as propriedades proprias enumeraveis de um
   * ou mais objetos source para um objeto target
   */
		function (target, sources) {
			return Object.assign(target, sources);
		}
	);
});
'use strict';

Rex('compose', function (_ref) {
	var apply = _ref.apply;
	var concat = _ref.concat;
	var reduce = _ref.reduce;
	var reverse = _ref.reverse;
	return (

		/**
   * Executa composicao de funcao direita para a esquerda
   * A funcao mais a direita pode ter qualquer arity, as
   * funcoes restantes devem ser unarios
   */
		function () {
			for (var _len = arguments.length, predicates = Array(_len), _key = 0; _key < _len; _key++) {
				predicates[_key] = arguments[_key];
			}

			return function () {
				for (var _len2 = arguments.length, parameters = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					parameters[_key2] = arguments[_key2];
				}

				return reduce(reverse(predicates), function (previous, f) {
					return apply(f, concat([], previous));
				}, parameters);
			};
		}
	);
});
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

Rex('cond', function () {
	return (

		/**
   * Com o mesmo comportamento da cadeia de responsabilidade, evitando a nescessidade
   * da uitlizacao de if
   */
		function () {
			for (var _len = arguments.length, handlers = Array(_len), _key = 0; _key < _len; _key++) {
				handlers[_key] = arguments[_key];
			}

			return function () {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = handlers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var _step$value = _slicedToArray(_step.value, 2);

						var chain = _step$value[0];
						var responsibility = _step$value[1];
						if (chain.apply(undefined, arguments)) return responsibility.apply(undefined, arguments);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			};
		}
	);
});
'use strict';

Rex('contains', function (_ref) {
	var different = _ref.different;
	var indexOf = _ref.indexOf;
	return (

		/**
   * Retorna true se o valor especificado e igual pelo menos um
   * elemento da lista, false caso contrario
   */
		function (colection, value) {
			return different(indexOf(colection, value), -1);
		}
	);
});
'use strict';

Rex('curry', function (_ref) {
	var apply = _ref.apply;
	var contains = _ref.contains;
	var mapFormat = _ref.mapFormat;
	var partial = _ref.partial;
	var repeat = _ref.repeat;
	var _ = _ref._;
	return (

		/**
   * Retorna uma funcao equivalente que seus argumentos nao necessitan
   * de ser fornecida uma de cada vez
   */
		function (predicate) {
			return partial(function curry(template) {
				for (var _len = arguments.length, parameters = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					parameters[_key - 1] = arguments[_key];
				}

				return contains(mapFormat(template, _, parameters), _) ? partial(curry, mapFormat(template, _, parameters)) : apply(predicate, mapFormat(template, _, parameters));
			}, repeat(_, predicate.length));
		}
	);
});
'use strict';

Rex('defaultTo', function (_ref) {
	var curry = _ref.curry;
	var or = _ref.or;
	return (

		/**
   * Retorna o segundo argumento, se nao for null, indefinido ou NaN
   * caso contrario, o primeiro argumento e retornado
   */
		curry(function (defaultValue, value) {
			return or(defaultValue, value);
		})
	);
});
'use strict';

(function () {

  [

  /**
   * Colecao de metodos dos objetos Array, Number, Object e String
   */
  'charAt', 'charCodeAt', 'codePointAt', 'concat', 'copyWithin', 'endsWith', 'entries', 'every', 'fill', 'filter', 'find', 'findIndex', 'fixed', 'fontcolor', 'fontsize', 'forEach', 'hasOwnProperty', 'includes', 'indexOf', 'isPrototypeOf', 'italics', 'join', 'keys', 'lastIndexOf', 'link', 'localeCompare', 'map', 'match', 'normalize', 'pop', 'propertyIsEnumerable', 'push', 'reduce', 'reduceRight', 'repeat', 'replace', 'reverse', 'search', 'shift', 'slice', 'small', 'some', 'sort', 'splice', 'split', 'startsWith', 'strike', 'sub', 'substr', 'substring', 'sup', 'toExponential', 'toFixed', 'toLocaleLowerCase', 'toLocaleString', 'toLocaleUpperCase', 'toLowerCase', 'toPrecision', 'toString', 'toUpperCase', 'trim', 'trimLeft', 'trimRight', 'unshift', 'valueOf', 'values'

  /**
   * Construtor de modulos com metodos da colecao acima
   */
  ].forEach(function (method) {
    return Rex(method, function () {
      return function (object) {
        for (var _len = arguments.length, parameters = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          parameters[_key - 1] = arguments[_key];
        }

        return object[method].apply(object, parameters);
      };
    });
  });
})();
'use strict';

Rex('f', function (_ref) {
	var always = _ref.always;
	return (

		/**
   * Uma função que sempre retorna false,
   * qualquer aprovada em parâmetros são ignorados
   */
		always(!1)
	);
});
'use strict';

Rex('getter', function (_ref) {
	var or = _ref.or;
	return (

		/**
   * Retorna o valor de uma chave de um objeto ou
   * retorna o valor default
   */
		function (object, property, defaultValue) {
			return or(or(object, {})[property], defaultValue);
		}
	);
});
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

(function () {
  return [

  /**
   * Colecao de nomes de modulos com seu correspondente pattern
   */
  ['isArray', /\[object Array\]/], ['isNumber', /\[object Number\]/], ['isObject', /\[object Object\]/], ['isString', /\[object String\]/], ['isVNode', /\[object vNode\]/], ['isVText', /\[object vText\]/]

  /**
   * Construtor de modulos de verificacao de tipos
   */
  ].forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var name = _ref2[0];
    var pattern = _ref2[1];
    return Rex(name, function (_ref3) {
      var test = _ref3.test;
      return function (object) {
        return test(pattern, Object.prototype.toString.call(object));
      };
    });
  });
})();
'use strict';

Rex('mapFormat', function (_ref) {
	var and = _ref.and;
	var equal = _ref.equal;
	var map = _ref.map;
	return (

		/**
   * Mapeia uma colecao, substituindo todos os elementos baseado no index
   * de sua localizacao pelo seu correspondente
   */
		function (collection, replaced, substitutes) {
			var index = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
			return map(collection, function (item) {
				return and(equal(item, replaced), substitutes.length) ? substitutes[index++] : item;
			});
		}
	);
});
'use strict';

Rex('max', function () {
	return (

		/**
   * Retorna o maior numero de um ou mais numeros
   */
		Math.max
	);
});
'use strict';

Rex('not', function () {
	return (

		/**
   * Executa o cast para boolean e invert o valor
   */
		function (conditional) {
			return !!!conditional;
		}
	);
});
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

(function () {

  [

  /**
   * Colecao de operadores de comparacao e aritimeticos
   */
  ['add', '+'], ['and', '&&'], ['different', '!='], ['divide', '/'], ['equal', '=='], ['gt', '>'], ['gte', '>='], ['lt', '<'], ['lte', '<='], ['mod', '%'], ['multiply', '*'], ['or', '||'], ['subtract', '-']

  /**
   * Construtor de modulos com operadores da colecao acima
   */
  ].forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var name = _ref2[0];
    var operator = _ref2[1];
    return Rex(name, function () {
      return Function.apply(undefined, ['a', 'b', 'return a ' + operator + ' b']);
    });
  });
})();
'use strict';

Rex('partial', function (_ref) {
	var apply = _ref.apply;
	var concat = _ref.concat;
	return (

		/**
   * Retorna uma funcao anonima e quando aplicado, retorna o resultado da aplicacao
   * de "predicate" com os argumentos fornecidos inicialmente "a" seguidos pelos argumentos apresentados para "b"
   */
		function (predicate) {
			for (var _len = arguments.length, a = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				a[_key - 1] = arguments[_key];
			}

			return function () {
				for (var _len2 = arguments.length, b = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					b[_key2] = arguments[_key2];
				}

				return apply(predicate, concat(a, b));
			};
		}
	);
});
'use strict';

Rex('repeat', function (_ref) {
	var always = _ref.always;
	var map = _ref.map;
	var split = _ref.split;
	return (

		/**
   * Retorna uma lista fixa de tamanho "size" contendo o valor "value"
   * identico especificado
   */
		function (value, size) {
			return size ? map(split(Array(size).toString(), ','), always(value)) : [];
		}
	);
});
'use strict';

Rex('t', function (_ref) {
	var always = _ref.always;
	return (

		/**
   * Uma função que sempre retorna false,
   * qualquer aprovada em parâmetros são ignorados
   */
		always(!0)
	);
});
'use strict';

Rex('test', function () {
	return (

		/**
   * Executa uma busca por uma correspondencia entre  uma expressao regular e uma string
   * Retorna true ou false
   */
		function (pattern, value) {
			return pattern.test(value);
		}
	);
});
'use strict';

Rex('UUID', function () {
	return (

		/**
   * Identificacao unica para usuario
   */
		function () {
			return window.parseInt(Date.now() * Math.random()).toString(36);
		}
	);
});
'use strict';

Rex('_', function (_ref) {
	var UUID = _ref.UUID;
	return (

		/**
   * Retorna um valor unico que sera utilizado
   * como um Gap
   */
		UUID()
	);
});
'use strict';

Rex('vAppendChild', function (r) {
	return (

		/**
   * Inclui cada filho do vNode em node, utilizando o vRender para
   * criar o vChild
   */
		r.curry(function (node, vNode) {
			return r.forEach(vNode.childNodes, function (vChild) {
				return node.appendChild(r.vRender(vChild));
			}), node;
		})
	);
});
'use strict';

Rex('vAppendNode', function (_ref) {
	var vAppendChild = _ref.vAppendChild;
	return (

		/**
   * Insere um novo node na arvore do DOM
   */
		function (_, vNode, parentNode) {
			return vAppendChild(parentNode, { childNodes: [vNode] });
		}
	);
});
'use strict';

Rex('vChildNodes', function (_ref) {
	var concat = _ref.concat;
	var not = _ref.not;
	var isObject = _ref.isObject;
	return (

		/**
   * Abstracao de um ChildNodes Element (Virtual ChildNodes)
   */
		function () {
			var childNodes = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
			var properties = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
			return concat(childNodes, not(isObject(properties)) ? properties : []);
		}
	);
});
'use strict';

Rex('vCreateNode', function (_ref) {
	var compose = _ref.compose;
	var vAppendChild = _ref.vAppendChild;
	var vExtendProperty = _ref.vExtendProperty;
	var _ = _ref._;
	return (

		/**
   * Cria um vNode, aplicando suas propriedades e incluindo
   * seus filhos
   */
		function (vNode) {
			return compose(vExtendProperty(_, vNode), vAppendChild(_, vNode))(document.createElement(vNode.tagName));
		}
	);
});
'use strict';

Rex('vCreateText', function () {
	return (

		/**
   * Cria um TextNode
   */
		function (vText) {
			return document.createTextNode(vText.textContent);
		}
	);
});
'use strict';

Rex('vExtendNode', function (_ref) {
	var compose = _ref.compose;
	var cond = _ref.cond;
	var isVNode = _ref.isVNode;
	var isVText = _ref.isVText;
	var vExtendProperty = _ref.vExtendProperty;
	var vExtendTextContent = _ref.vExtendTextContent;
	var vReflow = _ref.vReflow;
	var _ = _ref._;
	return (

		/**
   * Atualiza o Node real pelo vNode ou vText
   */
		function (node, vNode) {
			return cond([isVText, vExtendTextContent(node, _)], [isVNode, compose(vReflow(_, vNode), vExtendProperty(node, _))])(vNode);
		}
	);
});
'use strict';

Rex('vExtendProperty', function (_ref) {
	var curry = _ref.curry;
	var assign = _ref.assign;
	return (

		/**
   * Extende as propriedades de um Node, incluindo os
   * eventos de primeriro nivel
   */
		curry(function (node, vNode) {
			return assign(node, vNode.properties);
		})
	);
});
'use strict';

Rex('vExtendTextContent', function (_ref) {
	var curry = _ref.curry;
	return (

		/**
   * Altera o Text Content do node real pelo
   * virtula DOM
   */
		curry(function (node, vNode) {
			return node.textContent = vNode.textContent;
		})
	);
});
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Rex('vNode', function (_ref) {
	var vChildNodes = _ref.vChildNodes;
	var vProperties = _ref.vProperties;
	return (

		/**
   * Abstracao de um HTMLElement (Virtual HTMLElement)
   */
		function (tagName, properties, childNodes) {
			return _defineProperty({ tagName: tagName, properties: vProperties(properties), childNodes: vChildNodes(childNodes, properties), nodeType: 1 }, Symbol.toStringTag, 'vNode');
		}
	);
});
'use strict';

Rex('vProperties', function (_ref) {
	var isObject = _ref.isObject;
	return (

		/**
   * Verifica se a properiedade e um objeto, caso contratio
   * retorna um objeto literal
   */
		function (property) {
			return isObject(property) ? property : {};
		}
	);
});
'use strict';

Rex('vReflow', function (r) {
	return (

		/**
   * Atualiza a arvore do DOM com base na arvore do
   * virtual DOM
   */
		r.curry(function (node, vNode) {
			return r.forEach(r.repeat(0, r.max(node.childNodes.length, vNode.childNodes.length)), function (_, index) {
				return r.vRepaint(node.childNodes[index], vNode.childNodes[index], node);
			});
		})
	);
});
'use strict';

Rex('vRemoveNode', function () {
	return (

		/**
   * Remove o elemento real da arvore do DOM
   */
		function (node, _, parentNode) {
			return parentNode.removeChild(node);
		}
	);
});
'use strict';

Rex('vRender', function (_ref) {
	var cond = _ref.cond;
	var isVNode = _ref.isVNode;
	var isVText = _ref.isVText;
	var vCreateNode = _ref.vCreateNode;
	var vCreateText = _ref.vCreateText;
	return (

		/**
   * Com um vNode (Virtual DOM), transpila/renderiza a especificacao para um
   * elemento HTML
   */
		cond([isVNode, vCreateNode], [isVText, vCreateText])
	);
});
'use strict';

Rex('vRepaint', function (_ref) {
	var and = _ref.and;
	var cond = _ref.cond;
	var different = _ref.different;
	var f = _ref.f;
	var not = _ref.not;
	var t = _ref.t;
	var vAppendNode = _ref.vAppendNode;
	var vExtendNode = _ref.vExtendNode;
	var vRemoveNode = _ref.vRemoveNode;
	var vReplaceNode = _ref.vReplaceNode;
	return (

		/**
   * Identifica a manipulacao correspondente para atualizar
   * o Node com base no virtual DOM
   */
		cond([function (node, vNode) {
			return and(!!node, not(vNode));
		}, vRemoveNode], [function (node, vNode) {
			return and(not(node), !!vNode);
		}, vAppendNode], [function (node, vNode) {
			return different(node.nodeType, vNode.nodeType);
		}, vReplaceNode], [function (node, vNode) {
			return t;
		}, vExtendNode])
	);
});
'use strict';

Rex('vReplaceNode', function (_ref) {
	var vRender = _ref.vRender;
	return (

		/**
   * Troca o elemento Node real por um novo elemento
   * criado virtual
   */
		function (node, vNode, parentNode) {
			return parentNode.replaceChild(vRender(vNode), node);
		}
	);
});
'use strict';

Rex('vTag', function (_ref) {
  var reduce = _ref.reduce;
  var vNode = _ref.vNode;
  return (

    /**
     * Colecao de todos Elementos HTML
     */
    reduce(['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'listing', 'main', 'map', 'mark', 'marquee', 'menu', 'meta', 'meter', 'nav', 'nobr', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'plaintext', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'xmp'],

    /**
     * Criacao de helpers para facilitar a utilizacao do hScript e/ou melhorar
     * a leitura do codigo
     */
    function (previous, tagName) {
      return previous[tagName] = function (property, childNodes) {
        return vNode(tagName, property, childNodes);
      }, previous;
    }, {})
  );
});
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Rex('vText', function () {
	return (

		/**
   * Abstracao de um Text Node (Virtual HTMLElement)
   */
		function (textContent) {
			return _defineProperty({ textContent: String(textContent), nodeType: 3 }, Symbol.toStringTag, 'vText');
		}
	);
});