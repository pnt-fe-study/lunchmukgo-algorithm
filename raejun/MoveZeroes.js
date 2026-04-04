/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length === 1) return nums;

  if (nums.every((num) => num === 0)) return nums;

  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
    }
  }

  return nums;
};

/*
풀지 못함.

시간 복잡도는 O(n)이다.
공간 복잡도는 O(1)이다.

배열을 순회하면서 0이 나오면, 해당 인덱스의 요소를 제거하고, 배열의 끝에 0을 추가했다.
처음에, 0이 나올 때마다 0을 제거하고, 배열의 끝에 0을 추가하는 방식으로 풀이하려고 했는데, splice로 요소를 제거할 때마다 배열의 길이가 줄어들어서, 인덱스가 꼬이는 문제가 발생했다.
그래서, i--를 통해 인덱스를 조정하는 방식으로 풀이했다.

해당 문제 풀이는 시간 초과가 발생했다.
풀이를 찾아보니 투 포인터 방식을 사용해서 풀이하는 방식이 있었다.
0이 아닌 값을 앞에서부터 채우고, 나머지를 0으로 채워주면 되는 방식이었다. 너무 어렵게 생각했던 것 같다.
*/
