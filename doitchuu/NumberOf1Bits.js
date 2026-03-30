// 재업로드
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let current = n >>> 0;
    let count = 0;

    while (current !== 0) {
        current &= current - 1;
        count++;
    }

    return count;
};
