function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

function validPassword(input) {
  let userName = input[0];
  let count = 0;
  for (let i = 1; i < input.length; i++) {
    let password = reverseString(input[i]);
    count += 1;
    if (count == 4 && userName !== password) {
      console.log(`User ${userName} blocked!`);
      break;
    }
    if (userName === password) {
      console.log(`User ${userName} logged in.`);
    } else {
      console.log("Incorrect password. Try again.");
    }
  }
}
