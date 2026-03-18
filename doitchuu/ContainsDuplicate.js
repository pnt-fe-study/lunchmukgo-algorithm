/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const arrLength = nums.length;
    const set = new Set(nums);

    return arrLength !== set.size;
};
