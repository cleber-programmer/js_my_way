/* global Rex */
/* jshint esversion: 6 */

Rex('repeat', ({ always, map, split }) =>

	/**
	 * Retorna uma lista fixa de tamanho "size" contendo o valor "value"
	 * identico especificado
	 */
	(value, size) =>
		size ? map(split(Array(size).toString(), ','), always(value)) : []);