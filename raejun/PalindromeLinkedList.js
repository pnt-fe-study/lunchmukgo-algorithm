/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const arr = [];

  while (head) {
    arr.push(head.val);

    head = head.next;
  }

  const len = arr.length - 1;

  for (let i = 0; i <= len / 2; i++) {
    if (arr[i] !== arr[len - i]) return false;
  }

  return true;
};

/*
14분 걸림.

시간 복잡도는 O(n)이다.
공간 복잡도는 O(n)이다.

링크드 리스트를 순회하면서 노드의 값을 배열에 저장했다.
그 다음에, 배열의 길이의 절반까지만 루프를 돌면서, i번째 값과 len - i번째 값을 비교했다. 
만약 두 값이 다르면 false를 반환했다. 
루프가 끝난 후에는 true를 반환했다.

처음에 set을 통해 구하려고 했다.
처음 나오는 건 set 에 추가하고, 다음에 나오는 건 set에서 제거하는 방식으로 풀이하려고 했는데, 순서를 고려하지 않아서 실패했다.
시간 복잡도가 O(1)인 풀이는 떠오르지 않아서, 풀이하지 못했다.
*/
