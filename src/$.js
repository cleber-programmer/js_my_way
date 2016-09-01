/* global Rex */
/* jshint esversion: 6 */

Rex('$', ({ or }) =>

  /**
   * Retorna o primeiro elemento dentro do documento que corresponde
   * ao grupo especificado de seletores
   */
  (element, selector) =>
    (selector ? element : document).querySelector(or(selector, element)));