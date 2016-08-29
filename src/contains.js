/* global Rex */
/* jshint esversion: 6 */

Rex('contains', ({ different, indexOf }) =>

	/**
	 * Retorna true se o valor especificado e igual pelo menos um
	 * elemento da lista, false caso contrario
	 */
	(colection, value) =>
		different(indexOf(colection, value), -1));