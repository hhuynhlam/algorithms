/**
 * Serialization is the process of converting a data structure or object into
 * a sequence of bits so that it can be stored in a file or memory buffer, or
 * transmitted across a network connection link to be reconstructed later in
 * the same or another computer environment.

 * Design an algorithm to serialize and deserialize a binary tree. There is
 * no restriction on how your serialization/deserialization algorithm should
 * work. You just need to ensure that a binary tree can be serialized to a
 * string and this string can be deserialized to the original tree structure.

 * For example, you may serialize the following tree

      1
     / \
    2   3
       / \
      4   5

 * as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a
 * binary tree. You do not necessarily need to follow this format, so please be
 * creative and come up with different approaches yourself.

 * Note: Do not use class member/global/static variables to store states. Your
 * serialize and deserialize algorithms should be stateless.

 *  Definition for a binary tree node.

 *  function TreeNode(val) {
 *      this.val = val;
 *      this.left = this.right = null;
 *  }
 */

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function serializeNode(node, order) {
  if (!node) {
    order.push(null);
  } else {
    order.push(node.val);

    serializeNode(node.left, order);
    serializeNode(node.right, order);
  }

  return order.join(',');
}

function deserializeNode(node, list) {
  const left = list.pop();

  if (left) {
    node.left = new TreeNode(left);
    deserializeNode(node.left, list);
  }

  const right = list.pop();

  if (right) {
    node.right = new TreeNode(right);
    deserializeNode(node.right, list);
  }

  return node;
}

function serialize(root) {
  return serializeNode(root, []);
}

function deserialize(data) {
  const nodes = data
    .split(',')
    .map(d => ((d !== '') ? d : null))
    .reverse();

  return deserializeNode(new TreeNode(nodes.pop()), nodes);
}

exports.deserialize = deserialize;
exports.serialize = serialize;
exports.TreeNode = TreeNode;
