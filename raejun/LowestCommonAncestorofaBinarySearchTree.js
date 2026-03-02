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
var lowestCommonAncestor = function (root, p, q) {
  const findTarget = (root, target) => {
    if (!root) return null;

    const queue = [[root, 0]];

    while (queue.length) {
      const [node, level] = queue.shift();

      if (node === null) continue;

      if (node === target) return [node, level];

      if (node.left) queue.push([node.left, level + 1]);
      if (node.right) queue.push([node.right, level + 1]);
    }

    return null;
  };

  const findParent = (root, target) => {
    if (!root || root === target) return null;

    const queue = [root];

    while (queue.length) {
      const node = queue.shift();

      if (node === null) continue;

      if (node.left) {
        if (node.left === target) return node;

        queue.push(node.left);
      }
      if (node.right) {
        if (node.right === target) return node;

        queue.push(node.right);
      }
    }

    return null;
  };

  let [pNode, pLevel] = findTarget(root, p);
  let [qNode, qLevel] = findTarget(root, q);

  while (pNode !== qNode) {
    if (pLevel <= qLevel) {
      qNode = findParent(root, qNode);
      qLevel -= 1;
    } else {
      pNode = findParent(root, pNode);
      pLevel -= 1;
    }
  }

  return pNode;
};

/*
56분 걸림

시간 복잡도는 O(n2)이다. n은 트리의 노드 수이다.

q, p의 위치를 찾는 함수와 부모를 찾는 함수를 만들어서 풀이했다.
q, p 중 더 높은 위치(더 깊은 노드)에 있는 노드를 부모로 이동시키는 방식으로 풀이했다.

트리의 자식에서 부모로 가는 방법이 떠오르지 않았다. 그래서 따로 q, p의 위치를 찾고 부모를 찾는 함수를 만들어서 풀이했다.
*/
