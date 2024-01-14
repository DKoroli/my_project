function getMinFromArray(arr) {
  let intermediate = {
    minValue: arr[0],
    minIndex: 0,
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < intermediate.minValue) {
      intermediate.minValue = arr[i];
      intermediate.minIndex = i;
    }
  }
  return intermediate;
}

let numbers = [1, 4, 3, -2];
let result = [];
while (numbers.length > 0) {
  const source = getMinFromArray(numbers);
  result.push(source.minValue);
  numbers.splice(source.minIndex, 1);
}
console.log(result);
