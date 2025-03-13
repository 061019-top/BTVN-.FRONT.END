function capsocong(arr) {
    let d = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] !== d) {
        return false;
      }
    }
    return true;
  }
  function validateInput(input) {
    return input.every(num => !isNaN(num));
  }
  let input = prompt("Nhập chuỗi số, cách nhau bằng dấu phẩy (vd: 1, 2, 3, 4):").split(",").map(Number);

  if (validateInput(input)) {
    console.log(capsocong(input));
  } else {
    console.log("dữ liệu không hợp lệ");
  }