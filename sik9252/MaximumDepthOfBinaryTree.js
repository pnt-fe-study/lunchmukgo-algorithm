/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!node) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return Math.max(left, right) + 1;
};
