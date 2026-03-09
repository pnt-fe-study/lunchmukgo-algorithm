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
문제 풀지 못함.

시간 복잡도는 O(n)이다.

새로운 노드를 생성해서 링크드 리스트를 방식으로 풀이하려고 했다.
head = head.next 한 뒤에, 그 다음 루프에서 head = head.next를 할 때 이미 head.next를 바꿔버려 문제가 생긴다.
다른 사람들의 풀이를 보면, prev, cur, next를 이용해서 풀이한 것을 볼 수 있다.
prev는 이전 노드를 가리키고, cur는 현재 노드를 가리키고, next는 다음 노드를 가리킨다. 
루프를 돌면서 cur.next를 prev로 바꿔주고, prev와 cur를 한 칸씩 이동시키는 방식으로 풀이한다.
*/
