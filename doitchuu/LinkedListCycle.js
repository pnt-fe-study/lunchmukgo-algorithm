/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const isVisited = new Set();
  let current = head;

  while (current) {
    if (isVisited.has(current)) {
      return true;
    }

    isVisited.add(current);
    current = current.next;
  }

  return false;
};
