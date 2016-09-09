/* jshint esversion: 6 */

((modules, target) => {

  Object.assign(window, {

    /**
     * Baseado no Sandbox Pattern, um tipo de caixa preta onde registra e consome modulos
     * atraves de getter e setter
     */
    Rex: (nameOrModule, module) => module ? target[nameOrModule] = module : modules.push(nameOrModule),

    /**
     * Aguarda o evento onload para iniciar a execucao dos modulos/getter
     */
    onload: () => modules.forEach(module => module(target))

  });

})([], new Proxy({ '@': {} }, {
  
  /**
   * Baseado no Singleton Pattern, intercepta o getter de dependencia inicializando o modulo
   * ou retorna o cache trabalhando com um Memoize Pattern
   */
  get: (target, name, receiver) => target['@'][name] || (target['@'][name] = target[name](receiver))
  
}));