/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  let depth = 1;

  const dfs = (node) => {
    if (!node) return 1;

    const left = dfs(node.left);
    const right = dfs(node.right);

    depth = left > right ? left : right;

    return Math.max(left, right) + 1;
  };

  dfs(root);

  return depth;
};

/*
9분 걸림.

시간 복잡도는 O(n)이다.

DFS 알고리즘을 이용하여 풀이했다.
왼쪽과 오른쪽의 깊이를 구해서, 그 중에서 더 큰 값을 depth에 저장하는 방식으로 풀이했다.

이전 DiameterofBinaryTree 문제가 이것의 상위하는 문제였던 것 같다.
*/
