Rex('vRender', ({ cond, isVNode, isVText, vCreateNode, vCreateText }) => 

	/**
	 * Com um vNode (Virtual DOM), transpila/renderiza a especificacao para um
	 * elemento HTML
	 */
	cond(
		[isVNode, vCreateNode],
		[isVText, vCreateText]));