/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  nums.sort((a, b) => a - b);

  let start = nums.at(0);
  const end = nums.at(-1);

  let max = 0;

  for (let i = 1; i < nums.length; i++) {
    if (start !== nums[i]) {
      if (i > max) max = i;

      start = nums[i];
    } else if (end === nums[i]) {
      if (nums.length - i > max) max = nums.length - i;

      break;
    }
  }

  return nums[max];
};

/*
문제 풀지 못함.

시간 복잡도는 O(n log n)이다.

배열을 정렬한 후에 풀이하려고 했다.
배열을 정렬한 후에, start와 end를 이용해서 풀이하려고 했다. 
start는 배열의 첫 번째 요소로 초기화하고, end는 배열의 마지막 요소로 초기화했다.
배열을 순회하면서 start와 다른 요소가 나오면, 그 요소로 start를 업데이트하고, max를 업데이트했다. 
end와 같은 요소가 나오면, max를 업데이트하고 반복문을 종료했다.

max의 역할을 헷갈려 풀이를 하지 못하였다.
그냥 Map을 이용해서 요소의 개수를 세는 방식으로 풀이하면 더 간단하게 풀이할 수 있었을 것 같다.
*/
