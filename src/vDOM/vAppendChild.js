/* global Rex */
/* jshint esversion: 6 */

Rex('vAppendChild', (r) => 

	/**
	 * Inclui cada filho do vNode em node, utilizando o vRender para
	 * criar o vChild
	 */
	r.curry(
		(node, vNode) => {
			return r.forEach(vNode.childNodes,
				(vChild) =>
					node.appendChild(r.vRender(vChild))), node; }));