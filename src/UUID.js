Rex('UUID', () =>

	/**
	 * Identificacao unica para usuario
	 */
	() =>
		window.parseInt(Date.now() * Math.random()).toString(36));