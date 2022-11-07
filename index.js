/*function nilaiUN(mtk, bahasaIndonesia, bahasaInggris, ipa) {
  const value = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
  if ((mtk, bahasaIndonesia, bahasaInggris, ipa !== undefined)) {
    if (value > 89) {
      console.log(`Nilai rata-rata UN kamu adalah ${value} \nGrade : A`);
    } else if (value > 79) {
      console.log(`Nilai rata-rata UN kamu adalah ${value} \nGrade : B`);
    } else if (value > 69) {
      console.log(`Nilai rata-rata UN kamu adalah ${value} \nGrade : C`);
    } else if (value > 59) {
      console.log(`Nilai rata-rata UN kamu adalah ${value} \nGrade : D`);
    } else console.log(`Nilai rata-rata UN kamu adalah ${value} \nGrade : E`);
  } else console.log("nilai tidak boleh ada yang kosong");
}

nilaiUN(87, 90, 89, 69);

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

console.log(palindrome("takut"));
/*
const biodata = {
  name: "Ilham Danu",
  age: 27,
  hobbies: ["Futsal", "Game"],
  isMarried: false,
  schoolList: [
    {
      yearIn: 2013,
      yearOut: 2017,
      major: "Economic Development",
    },
  ],
  skills: [
    {
      skillName: "Javascript",
      level: "beginner",
    },
    {
      skillName: "HTML",
      level: "advanced",
    },
    {
      skillName: "CSS",
      level: "beginner",
    },
    {
      skillName: "Python",
      level: "beginner",
    },
  ],
  interesInCoding: true,
};

console.log(biodata);

function replaceVowel(word) {
  const map = { a: "o" };
  if (word !== typeof String) {
    return "Teks harus string";
  }
  return word.replace(/[a]/gi, (v) => map[v]);
}

console.log(replaceVowel("Jakarta"));
*/

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
