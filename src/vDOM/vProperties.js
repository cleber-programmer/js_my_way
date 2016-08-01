Rex('vProperties', ({ isObject }) =>

	/**
	 * Verifica se a properiedade e um objeto, caso contratio
	 * retorna um objeto literal
	 */
	(property) =>
		isObject(property) ? property : {});