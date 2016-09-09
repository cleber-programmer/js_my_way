/* global Rex */
/* jshint esversion: 6 */

(handlers => {

  Object.assign(Rex, {

    /**
     * Registra esculta de eventos que seram disparados por outros modulos/componentes
     * a qualquer momento
     */
    on: (channel, ...parameters) => (handlers[channel] = handlers[channel] || []).push(parameters),

    /**
     * Desliga esculta de eventos que fora registrado no metodo "on", recomenda-se
     * o desligamentos de eventos evitando o inchasso de intrucoes que nao sao mais utilizados
     */
    off: (channel, callback) => handlers[channel] = (handlers[channel] || []).filter(([c]) => c != callback),

    /**
     * Dispara eventos de um canal especifico com passagem de dados
     */
    trigger: (channel, data) => (handlers[channel] || []).forEach(([callback, context]) => callback.call(context, data))

  });

})({});