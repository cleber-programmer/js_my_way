/* global Rex */
/* jshint esversion: 6 */

Rex('cond', () =>

	/**
	 * Com o mesmo comportamento da cadeia de responsabilidade, evitando a nescessidade
	 * da uitlizacao de if
	 */
	(...handlers) =>
		(...parameters) => {
			for(let [chain, responsibility] of handlers) if(chain(...parameters)) return responsibility(...parameters); });