Rex('vExtendNode', ({ compose, cond, isVNode, isVText, vExtendProperty, vExtendTextContent, vReflow, _ }) =>

	/**
	 * Atualiza o Node real pelo vNode ou vText
	 */
	(node, vNode) =>
		cond(
			[isVText, vExtendTextContent(node, _)],
			[isVNode, compose(vReflow(_, vNode), vExtendProperty(node, _))])(vNode));