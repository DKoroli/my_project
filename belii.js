const arr = [1, 3, 5, 7];
function summary(atr) {
  let res = 0;
  for (let i = 0; i < atr.length; i++) {
    res += atr[i];
  }
  return res;
}
console.log(summary(arr));
