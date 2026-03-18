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
var middleNode = function(head) {
    let index = 1;
    let current = head;
    const map = new Map();

    while (current) {
        map.set(index, current);
        current = current.next;
        index++;
    }

    map.set(index, current);

    let middle = Math.ceil(map.size / 2);

    return map.get(middle);
};
