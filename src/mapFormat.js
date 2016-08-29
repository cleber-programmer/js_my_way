/* global Rex */
/* jshint esversion: 6 */

Rex('mapFormat', ({ and, equal, map }) =>

	/**
	 * Mapeia uma colecao, substituindo todos os elementos baseado no index
	 * de sua localizacao pelo seu correspondente
	 */
	(collection, replaced, substitutes, index = 0) =>
		map(collection, (item) => and(equal(item, replaced), substitutes.length) ? substitutes[index++] : item));