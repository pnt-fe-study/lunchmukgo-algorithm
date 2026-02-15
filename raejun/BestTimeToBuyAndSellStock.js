/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let value = 0;

    for (let i = 0; i < prices.length; i++) {
        const min = prices[i];
        const max = Math.max(...prices.slice(i + 1));

        value = Math.max(max - min, value);
    }

    return value;
};