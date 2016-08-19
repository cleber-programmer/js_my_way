Rex('vText', () =>

	/**
	 * Abstracao de um Text Node (Virtual HTMLElement)
	 */
	(textContent) =>
		({ textContent: String(textContent), nodeType: 3, [Symbol.toStringTag]: 'vText' }));