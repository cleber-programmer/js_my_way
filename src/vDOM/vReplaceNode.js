Rex('vReplaceNode', ({ vRender }) =>

	/**
	 * Troca o elemento Node real por um novo elemento
	 * criado virtual
	 */
	(node, vNode) =>
		node.parentNode.replaceChild(vRender(vNode), node));