function palindrom(string) {
  strLength = string.length;

  if (strLength < 3) {
    return "Teks harus lebih dari 2 huruf!";
  }

  result = "";
  for (let i = strLength - 1; i >= 0; i--) {
    result += string[i];
  }
  if (result === string) {
    return "Palindrome";
  } else {
    return "Bukan Palindrome";
  }
}

console.log(palindrom("takut"));
