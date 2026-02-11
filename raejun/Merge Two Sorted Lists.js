/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const newList = new ListNode();
    let newListNext = newList.next;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            newListNext = list1;
            list1 = list1.next;
        } else {
            newListNext = list2;
            list2 = list2.next;
        }

        newListNext = newListNext.next;
    }

    if (list1 !== null) {
        newListNext = list1;
    } else {
        newListNext = list2;
    }

    return newList.next;
};