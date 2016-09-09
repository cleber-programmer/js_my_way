/* global Rex */
/* jshint esversion: 6 */

(() => {

  Object.assign(Rex, {

    interceptors: [],

    __spy__: (step, ...parameters) => Rex.interceptors.forEach(interceptor => (interceptor[step] || () => {})(parameters)),

    http: (method, url, data) =>
      ((handlers, xhr) => {

        xhr.onreadystatechange = () => {
          (this.readyState == 4) && (Rex.__spy__('response', this), (handlers[this.status] || () => {})(this));
        };

        xhr.open(method, url, !0);
        Rex.__spy__('request', method, url, data, xrh);
        xhr.send(JSON.stringify(data || ''));

        return function when(status, callback) {
          return handlers[status] = callback, when;
        };

      })({}, new XMLHttpRequest)

  });
  
})();