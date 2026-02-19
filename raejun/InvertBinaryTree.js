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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  function change(root) {
    if (root === null) return;

    let tmp = root.right;

    root.right = root.left;
    root.left = tmp;
    change(root.left);
    change(root.right);
  }

  change(root);

  return root;
};

/* 
43분 걸림.

시간 복잡도는 O(n)이다.

재귀적으로 트리를 탐색하며, 각 노드에서 왼쪽과 오른쪽 자식 노드를 바꿔주는 방식으로 풀이했다.

재귀가 익숙하지 않아 풀이하는 데 시간이 다소 걸렸다.
완전 이진트리와 이진트리 개념이 헷갈려서 풀이하는 데 시간이 더 걸렸던 것 같다.
*/
