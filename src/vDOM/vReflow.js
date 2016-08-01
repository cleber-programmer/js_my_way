Rex('vReflow', (r) =>

	/**
	 * Atualiza a arvore do DOM com base na arvore do
	 * virtual DOM
	 */
	 r.curry(
		(node, vNode) =>
			r.forEach(r.repeat(0, r.max(node.childNodes.length, vNode.childNodes.length)),
				(_, index) =>
					r.vRepaint(node.childNodes[index], vNode.childNodes[index], node))));