Rex('h.vNode', [], function () {
  
  return function vNode(tagName, properties, children) {
    
    return !(this instanceof vNode)

    ? new vNode(tagName, properties, children)
    
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
      
      get tagName() {
        return tagName;
      }
      
    };
    
  };
  
});