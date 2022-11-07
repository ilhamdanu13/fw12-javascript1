function palindrome(string) {
  var strLength = string.length;
  for (let index = 0; index < strLength / 2; index++) {
    if (string[index] !== string[strLength - 1 - index]) {
      //if (string.length < 3) {
      // return "Teks harus lebih dari 2 huruf";
      //}
      return "Bukan Palindrome";
    }
  }
  return "Palindrome";
}

console.log(palindrome("malam"));
