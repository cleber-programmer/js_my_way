/* global Rex */
/* jshint esversion: 6 */

Rex('getter', ({ or }) =>

	/**
	 * Retorna o valor de uma chave de um objeto ou
	 * retorna o valor default
	 */
	(object, property, defaultValue) =>
		or(or(object, {})[property], defaultValue));