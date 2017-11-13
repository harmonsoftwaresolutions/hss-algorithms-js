const test = require('ava');
const BST = require('../lib/trees/binarysearchtree');

// error call for Ava
const newBst = () => new BST();

test('BST constructor', t => {
  t.plan(5);
  const errMsg = 'Root node key must be supplied';
  const err = t.throws(() => {
    newBst();
  }, errMsg);
  t.is(err.message, errMsg);

  const bst = new BST(3);
  const tree = bst.getTree();
  const val = tree.key;
  t.is(val, 3, 'should set root node key');
  t.is(bst.left, undefined, 'should set left child to undefined');
  t.is(bst.right, undefined, 'should set right child to undefined');
});

test('BST insert', t => {
  t.plan(2);
  const bst = new BST(3);
  bst.insert(7);
  t.is(bst.getTree().left.key, 7, 'should set left child');
  bst.insert(9);
  t.is(bst.getTree().right.key, 9, 'should set right child');
});
