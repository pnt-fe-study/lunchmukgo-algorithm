/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = [1, 2];

    if (n === 1 || n === 2) {
        return dp[n - 1];
    }

    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }

    return dp[n - 1];
};
