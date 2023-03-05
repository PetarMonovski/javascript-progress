function palindromeIntegers(arr) {
  let arrLength = 0;

  for (let j = 0; j < arr.length; j++) {
    let arrValue = String(arr[j]);
    if (arrValue.length % 2 == 0) {
      arrLength = arrValue.length / 2;
    } else {
      arrLength = Math.floor(arrValue.length / 2);
    }
    for (let i = 0; i < arrLength; i++) {
      let resultFirst = "";
      resultFirst += arrValue[i];
    }
  }
}

palindromeIntegers([1231, 3231, 4211, 1211]);
