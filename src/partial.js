Rex('partial', ({ apply, concat }) =>

	/**
	 * Retorna uma funcao anonima e quando aplicado, retorna o resultado da aplicacao
	 * de "predicate" com os argumentos fornecidos inicialmente "a" seguidos pelos argumentos apresentados para "b"
	 */
	(predicate, ...a) =>
		(...b) =>
			apply(predicate, concat(a, b)));