export default function letterCount() {
  let str = prompt("Bir metin giriniz");

  // Sadece harfleri al(regex), lowercase'e çevir,boşlukları kaldır,ve dizi haline getirme.
  const arr = str
    .replace(/[^a-zA-Z ]/g, "")
    .toLocaleLowerCase()
    .trim()
    .split("");

    // Boş obje içine key value olarak atmak için obje oluşturma.
  var obj = {};

  // Objede karakter varsa value arttır yoksa objeye ekle
  arr.forEach((char) => {
    char in obj ? (obj[char] += 1) : (obj[char] = 1);
  });


  // Objedeki valueları değişkene at Math.max() ile max value değerini bul.
  const objectValues = Object.values(obj);
  const maxValue = Math.max(...objectValues);

  // Max value değerine göre keyi bul ve yazdır.
  const letter = getKeyByValue(obj, maxValue);
  return console.log(`${letter} : ${maxValue}`);
}

// objedeki maxValue ya göre key ine döndüren fonkisyon
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
