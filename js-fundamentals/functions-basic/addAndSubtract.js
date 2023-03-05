function addAndSubtract(num1, num2, num3) {
  let sumOfTwo = sum(num1, num2);
  let result = subtract(sumOfTwo, num3);
  return result;
}

function subtract(result, num3) {
  return result - num3;
}

function sum(num1, num2) {
  return num1 + num2;
}

console.log(addAndSubtract(23, 6, 10));
