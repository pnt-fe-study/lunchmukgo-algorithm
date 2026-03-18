/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    } else {
      set.add(nums[i]);
    }
  }

  return false;
};

/*
2분 걸림.

시간 복잡도는 O(n)이다.

Set 자료구조를 이용하여 풀이했다.
배열을 순회하면서, Set에 요소가 있는지 확인하고, 있으면 true를 반환하고, 없으면 Set에 요소를 추가했다.
배열을 모두 순회한 후에도 중복된 요소가 없으면 false를 반환했다.


이전 문제들에 비해 매우 간단한 문제였다.
set, array, map 등 다양한 자료구조를 이용해서 풀 수 있을 것 같다.
*/
