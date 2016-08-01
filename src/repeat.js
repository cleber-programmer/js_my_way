Rex('repeat', ({ always, map, split }) =>

	/**
	 * Retorna uma lista fixa de tamanho "size" contendo o valor "value"
	 * identico especificado
	 */
	(value, size) =>
		map(split(Array(size).toString(), ','), always(value)));