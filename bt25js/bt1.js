function checkMin(arr) {
  if (!Array.isArray(arr)) {
    return "Mảng không hợp lệ";
  }

  if (arr.length === 0) {
    return "Mảng trống";
  }

  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log("Giá trị nhỏ nhất của mảng là:", min);
  return "Thêm mảng thành công";
}
checkMin([1, 3, 2, 4, 5]);
