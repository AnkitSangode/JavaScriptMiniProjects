const passwordBox = document.getElementById("password");
const button = document.querySelector(".btn");
const copy = document.querySelector(".copy");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "@#$%&^*()_+-=|}{[]></";
const allChars = uppercase + lowercase + numbers + symbols;

function createPass() {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPass() {
  passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value);

  // Alert the copied text
  alert("Copied the text: " + passwordBox.value);
}

copy.addEventListener("click", copyPass);
button.addEventListener("click", createPass);
