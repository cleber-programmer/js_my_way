/* global Rex */
/* jshint esversion: 6 */

Rex('vExtendTextContent', ({ curry }) =>

	/**
	 * Altera o Text Content do node real pelo
	 * virtula DOM
	 */
	curry(
		(node, vNode) =>
			node.textContent = vNode.textContent));