Rex('test', () =>

	/**
	 * Executa uma busca por uma correspondencia entre  uma expressao regular e uma string
	 * Retorna true ou false
	 */
	(pattern, value) =>
		pattern.test(value));