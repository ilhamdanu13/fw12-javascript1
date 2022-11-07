function nilaiUN(mtk, bahasaIndonesia, bahasaInggris, ipa) {
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
