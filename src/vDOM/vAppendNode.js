Rex('vAppendNode', ({ vAppendChild }) =>

	/**
	 * Insere um novo node na arvore do DOM
	 */
	(_, vNode, parentNode) =>
		vAppendChild(parentNode, { childNodes: [vNode] }));