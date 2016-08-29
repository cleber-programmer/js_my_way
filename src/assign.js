/* global Rex */
/* jshint esversion: 6 */

Rex('assign', () =>

	/**
	 * Copia os valores de todas as propriedades proprias enumeraveis de um
	 * ou mais objetos source para um objeto target
	 */
	(target, sources) =>
		Object.assign(target, sources));