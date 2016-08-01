Rex('vRepaint', ({ and, cond, different, f, not, t, vAppendNode, vExtendNode, vRemoveNode, vReplaceNode }) =>

	/**
	 * Identifica a manipulacao correspondente para atualizar
	 * o Node com base no virtual DOM
	 */
	cond(
		[(a, b) =>
			and(!!a, not(b)), vRemoveNode],
		[(a, b) =>
			and(not(a), !!b), vAppendNode],
		[(a, b) =>
			different(a.nodeType, b.nodeType), vReplaceNode],
		[(a, b) =>
			t, vExtendNode]));