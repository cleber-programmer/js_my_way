/* global Rex */
/* jshint esversion: 6 */

Rex('vRepaint', ({ and, cond, different, f, not, t, vAppendNode, vExtendNode, vRemoveNode, vReplaceNode }) =>

	/**
	 * Identifica a manipulacao correspondente para atualizar
	 * o Node com base no virtual DOM
	 */
	cond(
		[(node, vNode) =>
			and(!!node, not(vNode)), vRemoveNode],
		[(node, vNode) =>
			and(not(node), !!vNode), vAppendNode],
		[(node, vNode) =>
			different(node.tagName, vNode.tagName), vReplaceNode],
		[(node, vNode) =>
			t, vExtendNode]));