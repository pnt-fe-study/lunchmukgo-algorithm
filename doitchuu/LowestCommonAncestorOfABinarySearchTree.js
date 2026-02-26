/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  const small = Math.min(p.val, q.val);
  const big = Math.max(p.val, q.val);

  while (root) {
    if (big < root.val) {
      root = root.left;
    } else if (small > root.val) {
      root = root.right;
    } else {
      return root;
    }
  }

  return null;
};
