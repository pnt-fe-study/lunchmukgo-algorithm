/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let newHead = new ListNode(head.val);

  head = head.next;

  while (head) {
    let tmp = newHead;

    newHead = head;
    newHead.next = tmp;
    head = head.next;
  }

  return newHead;
};

/*
못품

*/
