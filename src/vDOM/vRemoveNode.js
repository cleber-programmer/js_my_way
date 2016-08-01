Rex('vRemoveNode', () =>

	/**
	 * Remove o elemento real da arvore do DOM
	 */
	(node, _, parentNode) =>
		parentNode.removeChild(node));