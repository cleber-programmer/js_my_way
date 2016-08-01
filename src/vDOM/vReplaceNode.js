Rex('vReplaceNode', ({ vRender }) =>

	/**
	 * Troca o elemento Node real por um novo elemento
	 * criado virtual
	 */
	(node, vNode, parentNode) =>
		parentNode.replaceChild(vRender(vNode), node));