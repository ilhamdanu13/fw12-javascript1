function teks(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      result += "o";
    } else {
      result += string[i];
    }
  }
  return result;
}
console.log(teks("Jakarta"));
