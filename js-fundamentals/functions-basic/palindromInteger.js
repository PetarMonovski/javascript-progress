function palindrom(arr) {
  for (let i = 0; i < arr.length; i++) {
    let arrToString = String(arr[i]);
    for (let j = 0; j < Math.floor(arrToString.length / 2); j++) {
      let isPalindrom = false;

      if (arrToString[j] == arrToString[arrToString.length - 1 - j]) {
        isPalindrom = true;
      } else {
        isPalindrom = false;
      }
      if (isPalindrom) {
        console.log("True");
      } else {
        console.log("False");
      }
    }
  }
}

palindrom([123, 323, 421, 121]);
