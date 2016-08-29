/* global Rex */
/* jshint esversion: 6 */

Rex('vExtendProperty', ({ curry, assign }) =>

	/**
	 * Extende as propriedades de um Node, incluindo os
	 * eventos de primeriro nivel
	 */
	curry(
		(node, vNode) =>
			assign(node, vNode.properties)));