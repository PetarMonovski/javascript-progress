function oddAndEvenSum(num) {
  let oddSum = 0;
  let evenSum = 0;
  let numAsString = String(num);

  for (let i = 0; i < numAsString.length; i++) {
    if (numAsString[i] % 2 != 0) {
      oddSum += Number(numAsString[i]);
    } else {
      evenSum += Number(numAsString[i]);
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(3495892137259234);
