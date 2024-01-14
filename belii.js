let numbers = [1, 4, -75, 3, 0, 15, 33, -2];
let temp;
let zer = 1;
let check = true;
while (check) {
  check = false;
  for (let i = 0; i < numbers.length - zer; i++) {
    if (numbers[i] > numbers[i + 1]) {
      temp = numbers[i + 1];
      numbers[i + 1] = numbers[i];
      numbers[i] = temp;
      check = true;
    }
  }
  zer++;
}
console.log(numbers);
