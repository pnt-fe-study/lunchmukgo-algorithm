/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];

  const map = new Map();

  nums.forEach((num) => {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  });

  for (const [k, v] of map) {
    if (v === 1) {
      return k;
    }
  }
};

/*
8분 걸림.

시간 복잡도는 O(n)이다. n은 입력 배열의 길이이다.
공간 복잡도는 O(n)이다. Map 자료구조에 최대 n개의 요소가 저장될 수 있기 때문이다.

Map 자료구조를 이용하여 풀이했다.
배열을 순회하면서, Map에 요소가 있는지 확인하고, 있으면 요소의 값을 1 증가시키고, 없으면 요소를 추가하고 값을 1로 설정했다.
Map을 순회하면서, 값이 1인 요소의 키를 반환했다.

Map을 이용해서 풀이를 했지만, 뭔가 for문을 한 번만 돌리는 풀이가 있을 것 같은 느낌이 들었다.
*/
