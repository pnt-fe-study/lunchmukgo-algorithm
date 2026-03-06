/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // 배열엔 항상 다수의 원소가 존재한다.
    // 다만, n / 2개 이상인 다수의 원소를 반환한다.
    const map = new Map();
    const majorElement = [];

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);

        if (map.get(nums[i]) > nums.length / 2) {
            return nums[i];
        }
    }
};
