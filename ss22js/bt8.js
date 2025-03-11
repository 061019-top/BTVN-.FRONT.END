let numberArr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 5, 5, 5, 7];
let maxCount = 0;
let minElement;
for (let i = 0; i < 12; i++) {
  let count = 0;
  for (let j = 0; j < 12; j++) {
    if ((arr[i] = arr[j])) {
      count++;
    }
  }
  if (count > maxCount) {
    maxCount = count;
    minElement = arr[i];
  } else if (count == maxCount && minElement > arr[i]) {
    minElement = arr[i];
  }
}
// Tìm hiêu thêm bt8 ss22
