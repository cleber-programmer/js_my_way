Rex('route.pushState', [

  'route.init'

], function (init) {

  return function (state, title, url) {
    history.pushState(state, title, url), init();
  };

});