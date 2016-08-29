/* global Rex */
/* jshint esversion: 6 */

Rex('$', () =>

  /**
   * Retorna o primeiro elemento dentro do documento que corresponde
   * ao grupo especificado de seletores
   */
  (selector) =>
    document.querySelector(selector));