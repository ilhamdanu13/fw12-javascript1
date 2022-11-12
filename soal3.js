// Daftar nilai
let mtk = 89;
let bahasaIndonesia = 90;
let bahasaInggris = 89;
let ipa = 69;

// Total nilai
const totalNilai = mtk + bahasaIndonesia + bahasaInggris + ipa;
// Rata-rata nilai
const avgUN = totalNilai / 4;

// Kondisi tipe data
if (typeof mtk !== "number") {
  console.log("Input nilai harus berisi number");
} else if (typeof bahasaIndonesia !== "number") {
  console.log("Input nilai harus berisi number");
} else if (typeof bahasaInggris !== "number") {
  console.log("Input nilai harus berisi number");
} else if (typeof ipa !== "number") {
  console.log("Input nilai harus berisi number");
}

// Kondisi grade nilai
else if (avgUN > 89) {
  console.log(`Nilai rata-rata UN kamu adalah ${avgUN} \nGrade : A`);
} else if (avgUN > 79) {
  console.log(`Nilai rata-rata UN kamu adalah ${avgUN} \nGrade : B`);
} else if (avgUN > 69) {
  console.log(`Nilai rata-rata UN kamu adalah ${avgUN} \nGrade : C`);
} else if (avgUN > 59) {
  console.log(`Nilai rata-rata UN kamu adalah ${avgUN} \nGrade : D`);
} else {
  console.log(`Nilai rata-rata UN kamu adalah ${avgUN} \nGrade : E`);
}
