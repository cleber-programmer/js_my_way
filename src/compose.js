Rex('compose', ({ apply, concat, reduce, reverse }) =>

	/**
	 * Executa composicao de funcao direita para a esquerda
	 * A funcao mais a direita pode ter qualquer arity, as
	 * funcoes restantes devem ser unarios
	 */
	(...predicates) =>
		(...parameters) => reduce(reverse(predicates), (previous, f) => apply(f, concat([], previous)), parameters));