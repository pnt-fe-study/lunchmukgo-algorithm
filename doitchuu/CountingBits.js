/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const dp = [0];

    if (n === 0) {
        return dp;
    }

    for (let i = 1; i <= n; i++) {
        const count = i.toString(2).replaceAll("0", "").length;
        dp.push(count);
    }

    return dp;
};
