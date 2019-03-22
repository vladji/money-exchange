// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let exchange = {};
    if (currency <= 0) 
    return exchange;
    if (currency >= 10000) {
      exchange["error"] = "You are rich, my friend! We don't have so much coins for exchange";
      return exchange;
    }
  let firstElement = currency / 50 ^ 0;
    if (firstElement !== 0)
    exchange["H"] = firstElement;
  currency -= (firstElement * 50);
  let secondElement = currency / 25 ^ 0;
    if (secondElement !== 0)
    exchange["Q"] = secondElement;
  currency -= (secondElement * 25);
  let thirdElement = currency / 10 ^ 0;
    if (thirdElement !== 0)
    exchange["D"] = thirdElement;
  currency -= (thirdElement * 10);
  let fourthElement = currency / 5 ^ 0;
    if (fourthElement !== 0)
    exchange["N"] = fourthElement;
  currency -= (fourthElement * 5);
  let fifthElement = currency;
    if (fifthElement !== 0)
    exchange["P"] = fifthElement;
  return exchange;
}
