Rex('h.reflow', [

  'forEach',
  'get',
  'max',
  'sparse',
  'h.repaint'

], function (forEach, get, max, sparse, repaint) {

  function getChildren(node) {
    return get(get(node, 'childNodes', []), 'length', 0);
  }
  
  function reflowChild(node, vDOM, iNode, iVDOM) {
    reflowNode(get(node, 'childNodes', [])[iNode], get(vDOM, 'childNodes', [])[iVDOM], node), node;
  }
  
  function reflowNode(node, vDOM, parentNode) {
    window.requestAnimationFrame(function () {
      solve(repaint(node, vDOM, get(node, 'parentNode', parentNode)), vDOM);
    });
  }
  
  function solve(node, vDOM) {
    forEach(sparseOfChildren(node, vDOM), function (_, indice, children) {
      reflowChild(node, vDOM, (indice - (children.length - sparseOfChildren(node, vDOM).length)), indice);
    });
  }
  
  function sparseOfChildren(node, vDOM) {
    return sparse(max(getChildren(node), getChildren(vDOM)));
  }
  
  return reflowNode;
  
});