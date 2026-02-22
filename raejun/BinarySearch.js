// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function(nums, target) {
//     let start = 0;
//     let end = nums.length - 1;

//     while (start <= end) {
//         const s = nums[start];
//         const e = nums[end];

//         if (s === target) return start;
//         if (e === target) return end;
//         if (s < target) start++;
//         if (e > target) end--;
//     }

//     return -1;
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    if (nums[start] === target) return start;
    if (nums[end] === target) return end;

    const mid = Math.floor((start + end) / 2);
    const value = nums[mid];

    if (value === target) return mid;
    else if (value > target) end = mid - 1;
    else start = mid + 1;
  }

  return -1;
};

/*
20분 걸림.

시간 복잡도는 O(logn)이다.

이진 탐색 알고리즘을 이용하여 풀이했다.

처음에 양 끝에서부터 하나씩 비교해가며 target과 같은 값이 있는지 확인하는 방식으로 풀이했는데, 시간 복잡도가 O(n)이어서 이진 탐색 알고리즘을 이용하여 풀이했다.
*/
