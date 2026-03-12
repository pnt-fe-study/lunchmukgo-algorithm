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
var diameterOfBinaryTree = function (root) {
  let maxLevel = 0;

  const dfs = (node, level) => {
    if (!node) {
      if (maxLevel < level) maxLevel = level;

      return;
    }

    if (node.left) dfs(node.left, level + 1);
    if (node.right) dfs(node.right, level + 1);
  };

  dfs(root.right, 0);

  const tmp = maxLevel;
  maxLevel = 0;

  dfs(root.left, 0);

  return tmp + maxLevel;
};

/*
문제 풀지 못함.

시간 복잡도는 O(n)이다.

DFS 알고리즘을 이용하여 풀이했다.

DFS를 이용해서 문제를 풀려고 했다.
DFS를 왼쪽 오른쪽을 구분해서 풀려고 했다.
접근이 완전히 잘못됐다.
한쪽으로만 DFS가 될수도 있는 상황이다.
사실 양쪽으로 나눠서 구하는 방식도 제대로 구현하지 못했다.

*/
