export default function hard(target) {
  // sayı dizi 
  const nums = [1, 5, 9, 6, 2, 52];

  // döngü ile dizi üzerinde gezerek target'a eşit olan indexleri return et
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === target) {
          return console.log([i, j, k]);
        }
      }
    }
  }
}
