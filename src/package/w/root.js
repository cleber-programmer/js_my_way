Rex('w.hRoot', [
  
    'get'
  , 'set'

], function (get, set) {
  
  return function (context) {
    return get(set((context.shadowRoot || context.createShadowRoot()), 'innerHTML', '<div></div>'), 'childNodes', [])[0];
  };
  
});