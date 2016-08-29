/* global Rex */
/* jshint esversion: 6 */

Rex('curry', ({ apply, contains, mapFormat, partial, repeat, _ }) =>

	/**
	 * Retorna uma funcao equivalente que seus argumentos nao necessitan
	 * de ser fornecida uma de cada vez
	 */
	(predicate) =>
		partial(function curry(template, ...parameters) {
			return contains(mapFormat(template, _, parameters), _) ? partial(curry, mapFormat(template, _, parameters)) : apply(predicate, mapFormat(template, _, parameters)); }, repeat(_, predicate.length)));