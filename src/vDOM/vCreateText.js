/* global Rex */
/* jshint esversion: 6 */

Rex('vCreateText', () => 

	/**
	 * Cria um TextNode
	 */
	(vText) =>
		document.createTextNode(vText.textContent));