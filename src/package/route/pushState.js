Rex('route.pushState', [

  'route.init'

], function (init) {

  return function (state, title, url) {
    window.history.pushState(state, title, url), init();
  };

});