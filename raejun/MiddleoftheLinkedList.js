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
var middleNode = function (head) {
  let len = 0;

  let node = head;
  let node2 = head;

  while (node) {
    node = node.next;
    len++;
  }

  len = len % 2 !== 0 ? (len + 1) / 2 : Math.ceil((len + 1) / 2);

  while (--len) {
    node2 = node2.next;
  }

  return node2;
};

/*
12분 걸림.

시간 복잡도는 O(n)이다.

링크드 리스트를 순회하면서 풀이했다.
링크드 리스트의 길이를 구한 뒤에, 길이가 홀수면 (len + 1) / 2를 구해서 len에 저장하고, 짝수면 Math.ceil((len + 1) / 2)를 구해서 len에 저장했다. 
그 다음에, len이 0이 될 때까지 node2를 node2.next로 업데이트하면서 루프를 돌았다. 
루프가 끝난 후에 node2가 중간 노드를 가리키게 된다.

가운데 노드의 위치의 값을 이동 거리로 사용했는데, 위치의 값보다 이동거리가 더 짧기 때문에 풀이가 다소 복잡하게 되었다.
예를 들어 5개 노드의 가운데는 3번째 노드이지만, 이동 거리는 2이다.
이동 거리를 구해서 풀이하는 방식이 더 간단할 것 같다.
*/
