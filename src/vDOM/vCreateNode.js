Rex('vCreateNode', ({ compose, vAppendChild, vExtendProperty, _ }) =>

	/**
	 * Cria um vNode, aplicando suas propriedades e incluindo
	 * seus filhos
	 */
	(vNode) =>
		compose(
			vExtendProperty(_, vNode),
			vAppendChild(_, vNode))(document.createElement(vNode.tagName)));