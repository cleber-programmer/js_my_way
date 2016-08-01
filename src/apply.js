Rex('apply', () =>

	/**
	 * Executa uma função passando a colecao "parameters"
	 * como seus argumentos
	 */
	(predicate, parameters) =>
		predicate.apply(predicate, parameters));