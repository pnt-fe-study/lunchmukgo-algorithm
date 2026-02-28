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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root === null) return true;

  let queue = [
    [root.left, "l"],
    [root.right, "r"],
  ];

  let leftNullCnt = 0;
  let rightNullCnt = 0;

  while (queue.length) {
    const newQueue = [];

    for (let i = 0; i < queue.length; i++) {
      if (queue[i][0] === null) continue;

      if (queue[i][0].left) {
        newQueue.push([queue[i][0].left, queue[i][1]]);
      }

      if (queue[i][0].right) {
        newQueue.push([queue[i][0].right, queue[i][1]]);
      }
    }

    if (newQueue.every((v) => v[1] === "l")) rightNullCnt++;
    if (newQueue.every((v) => v[1] === "r")) leftNullCnt++;
    if (Math.abs(rightNullCnt - leftNullCnt) >= 2) return false;

    queue = newQueue;
  }

  return true;
};

/*
문제 풀이 실패.

시간 복잡도는 O(n)이다. n은 트리의 노드 수이다.

BFS로 트리를 탐색하여 풀이하려고 하였다.

문제 이해가 잘 안된다. 왼쪽과 오른쪽 차이가 1이란 게 루트에서 나오는 왼쪽과 오른쪽만 생각했다.
하지만, 트리의 모든 노드에서 왼쪽과 오른쪽 차이가 1이 되어야 한다는 조건으로 내가 푼 풀이에는 문제가 있다.

*/
