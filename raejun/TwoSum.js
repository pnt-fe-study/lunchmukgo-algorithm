/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const newNums = nums.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
    
    let start = 0;
    let end = newNums.length - 1;

    while (start < end) {
        const sum = newNums[start][0] + newNums[end][0];

        if (sum > target) {
            end--;
        } else if (sum < target) {
            start++;
        } else {
            return [newNums[start][1], newNums[end][1]];
        }
    }
};