// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let result = {};

  if (currency <= 0) return result;
  if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

  let H = Math.floor(currency / 50);
  let Q = Math.floor((currency - (H * 50)) / 25);
  let D = Math.floor((currency - ((H * 50) + (Q * 25))) / 10);
  let N = Math.floor((currency - ((H * 50) + (Q * 25) + (D * 10))) / 5);
  let P = 0;
  
  let g = (currency - ((H * 50) + (Q * 25) + (D * 10) + (N * 5)));
  while (g !== 0){
      P++;
      g--;
  }
  
  if (H !== 0) {
      result.H = H;
  }
  if (Q !== 0) {
      result.Q = Q;
  }
  if (D !== 0) {
      result.D = D;
  }
  if (N !== 0) {
      result.N = N;
  }
  if (P !== 0) {
      result.P = P;
  }

  return result;
}
