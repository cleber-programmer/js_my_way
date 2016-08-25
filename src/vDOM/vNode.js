Rex('vNode', ({ toUpperCase, vChildNodes, vProperties }) =>

	/**
	 * Abstracao de um HTMLElement (Virtual HTMLElement)
	 */
	(tagName, properties, childNodes) =>
		({ tagName: toUpperCase(tagName), properties: vProperties(properties), childNodes: vChildNodes(childNodes, properties), nodeType: 1, [Symbol.toStringTag]: 'vNode' }));