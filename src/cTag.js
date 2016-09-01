/* global Rex */
/* jshint esversion: 6 */

Rex('cTag', () =>

  /**
   * Elemento personalizado é um costume tag HTML e/ou elemento que nos dá a ferramenta para ampliar
   * o vocabulário do HTML e em ensinar novos truques
   */
  (name, classElement) =>
    document.registerElement(name, classElement));