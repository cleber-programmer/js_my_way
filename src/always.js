Rex('always', () => 

	/**
	 * Retorna uma funcao que sempre retorna o valor dado
	 * Note-se que para os nao-primitivas o valor devolvido e uma
	 * referencia para o valor original
	 */
	(value) =>
		() => value);