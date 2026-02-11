/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // MEMO: 시간 초과!
  let maxPrice = 0;

  for (let i = 0; i < prices.length - 1; i++) {
      for (let j = i + 1; j < prices.length; j++) {
          const price = prices[i] - prices[j];

          if (price < 0) {
              maxPrice = Math.max(maxPrice, Math.abs(price));
          }
      }
  }

  return maxPrice;
};