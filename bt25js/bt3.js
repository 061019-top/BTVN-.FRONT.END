function numberEve(arr) {
  // Kiểm tra xem tham số đầu vào có phải là mảng hay không
  if (!Array.isArray(arr)) {
    console.log(`Dữ liệu không hợp lệ`);
    return;
  }
  let newArray = [];
  for (let i = -1; i < arr.length; i++) {
    (arr[i + 1] % 2 == 0) ? newArray.push(arr[i + 1]) : newArray;
  }
  if (newArray.length == 0) {
    console.log(`Mảng không có số chẵn`);
  } else {
    console.log(`Mảng có số chẵn là`, newArray);
  }
}

// Gọi hàm với một mảng rỗng
numberEve([2, 4, 3, 2, 5, 7]);
