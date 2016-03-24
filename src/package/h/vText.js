Rex('h.vText', [], function () {
  
  return function vText(text) {
    
    return !(this instanceof vText)

    ? new vText(text)
    
    : {
      
      get nodeType() {
        return 3;
      },
      
      get textContent() {
        return text;
      }
      
    };
    
  };
  
});