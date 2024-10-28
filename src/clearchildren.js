// Simple helper module for clearing DOM children
export const clearChildren = (node) => {
  while (node.firstChild) {
    node.removeChild(node.lastChild);
  }
};
