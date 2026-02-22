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
  while (head !== null) {
    if (head.val === "s") return true;

    head.val = "s";
    head = head.next;
  }

  return false;
};

/*
13분 걸림.

시간 복잡도는 O(n)이다.

링크드 리스트를 탐색하면서 각 노드의 값을 's'로 바꿔주는 방식으로 풀이했다. 만약 이미 's'로 바뀐 노드를 만나면 사이클이 존재하는 것이다.

노드의 값을 바꿔주는 방식이 다소 비효율적이긴 하지만, 다른 방법이 생각나지 않아 풀이했다.
*/
