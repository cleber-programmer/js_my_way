/* global Rex */
/* jshint esversion: 6 */

Rex('vChildNodes', ({ concat, not, isObject }) =>

	/**
	 * Abstracao de um ChildNodes Element (Virtual ChildNodes)
	 */
	(childNodes = [], properties = {}) =>
		concat(childNodes, not(isObject(properties)) ? properties : []));