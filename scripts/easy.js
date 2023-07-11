export default getAge;

function getAge() {
  let dogumTarihi = prompt("Doğum tarihi giriniz.");

  // date classı ile şuan ki zamanı al
  const date = new Date();
  let dateNow = date.getFullYear();

  // Doğum tarihinden çıkar ve yaşını bul.
  let result = dateNow - dogumTarihi;

  return console.log(result);
}
