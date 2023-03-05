function passwordValidator(password) {
  let digitsCount = 0;
  let isValid = true;
  if (password.length < 6 || password.length > 10) {
    console.log("Password must be between 6 and 10 characters");
    isValid = false;
  }

  for (let i = 0; i < password.length; i++) {
    if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
      digitsCount += 1;
    }
    if (
      (password.charCodeAt(i) >= 65 && password.charCodeAt(i) >= 90) ||
      (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)
    ) {
      console.log("Password must consist only of letters and digits");
      isValid = false;
    }
  }

  if (digitsCount < 2) {
    console.log("Password must have at least 2 digits");
    isValid = false;
  }
  if (isValid) {
    console.log("Password is valid");
  }
}

//passwordValidator('logIn')
//passwordValidator('MyPass123')
passwordValidator("Pa$s$s");
