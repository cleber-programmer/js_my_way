/* global Rex */
/* jshint esversion: 6 */

Rex('defaultTo', ({ curry, or }) =>

	/**
	 * Retorna o segundo argumento, se nao for null, indefinido ou NaN
	 * caso contrario, o primeiro argumento e retornado
	 */
	curry(
		(defaultValue, value) =>
			or(defaultValue, value)));