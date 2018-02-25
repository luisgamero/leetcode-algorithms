// 122. Best Time to Buy and Sell Stock II

/* PROMPT ===================

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again

*/

// SOLUTION =================

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let profit = 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) profit += prices[i] - prices[i - 1]
  }

  return profit
}

// note: this only works if you can sell then buy a stock the same day (not holding mutiple stocks at once)
