Rex('h.vNode', [], function () {
  
  return function vNode(tag, properties, children) {
    
    return !(this instanceof vNode)

    ? new vNode(tag, properties, children)
    
    : {
      
      get childNodes() {
        return children;
      },
      
      get nodeType() {
        return 1;
      },
      
      get properties() {
        return properties;
      },
      
      get tag() {
        return tag;
      }
      
    };
    
  };
  
});