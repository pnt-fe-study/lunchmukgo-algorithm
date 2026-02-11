// MEMO: 편하신 언어로 작성 부탁드립니다. 해당 주석은 풀이 입력 시 지워주세요.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              const output = [i, j];

              return output;
          }
      }
  }
};