class BinarySearchTree {
  constructor(val) {
    if (!val) throw new Error('Root node key must be supplied');

    // private scope
    const root = {
      key: val,
      left: undefined,
      right: undefined,
    };

    // PRIVATE FUNCTIONS
    function createNode(key) {
      const node = {
        key,
        left: undefined,
        right: undefined,
      };

      return node;
    }

    // handles assigning of node left/right
    function recurse(node, key) {
      if (node === undefined) {
        return createNode(key);
      }

      // binary trees populate left node first
      if (node.left === undefined) {
        Object.defineProperty(node, 'left', {
          value: createNode(key),
        });
        return node.left;
      }

      if (key < node.key) {
        Object.defineProperty(node, 'left', {
          value: recurse(node.left, key),
        });
      } else if (key > node.key) {
        Object.defineProperty(node, 'right', {
          value: recurse(node.right, key),
        });
      }

      return node;
    }

    // PUBLIC FUNCTIONS
    this.insert = key => {
      recurse(root, key);
    };

    // keep root private, safely deep clone
    this.getTree = () => JSON.parse(JSON.stringify(root));
  }
}

module.exports = BinarySearchTree;
