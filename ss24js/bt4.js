let matrix = [];
let choice;

do {
  choice = Number(
    prompt(`===== MENU =====
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử
4. Tìm phần tử lớn nhất và chỉ số
5. Trung bình cộng một hàng
6. Đảo ngược các hàng
7. Thoát
================
Lựa chọn của bạn:`)
  );

  if (![1, 2, 3, 4, 5, 6, 7].includes(choice)) {
    alert("Lựa chọn không hợp lệ!");
    continue;
  }

  switch (choice) {
    case 1:
      let rows = Number(prompt("Số hàng:"));
      let cols = Number(prompt("Số cột:"));
      if (rows > 0 && cols > 0) {
        matrix = Array.from({ length: rows }, () =>
          Array.from({ length: cols }, () => Number(prompt("Nhập phần tử:")))
        );
        alert("Nhập mảng thành công!");
      } else {
        alert("Số hàng và cột phải lớn hơn 0!");
      }
      break;

    case 2:
      alert(
        matrix.length
          ? matrix.map((row) => row.join("\t")).join("\n")
          : "Mảng trống!"
      );
      break;

    case 3:
      alert(
        matrix.length
          ? "Tổng: " + matrix.flat().reduce((sum, value) => sum + value, 0)
          : "Mảng trống!"
      );
      break;

    case 4:
      if (matrix.length) {
        let max = Math.max(...matrix.flat());
        let [row, col] = matrix
          .flatMap((r, i) => r.map((v, j) => [i, j, v]))
          .find(([_, __, v]) => v === max);
        alert(`Phần tử lớn nhất: ${max} tại vị trí [${row}][${col}]`);
      } else {
        alert("Mảng trống!");
      }
      break;

    case 5:
      if (matrix.length) {
        let row = Number(prompt(`Hàng (0 đến ${matrix.length - 1}):`));
        if (row >= 0 && row < matrix.length) {
          let avg =
            matrix[row].reduce((sum, val) => sum + val, 0) / matrix[row].length;
          alert(`Trung bình hàng ${row}: ${avg}`);
        } else {
          alert("Hàng không hợp lệ!");
        }
      } else {
        alert("Mảng trống!");
      }
      break;

    case 6:
      if (matrix.length) {
        matrix.reverse();
        alert(
          "Đã đảo ngược các hàng!\n" +
            matrix.map((row) => row.join("\t")).join("\n")
        );
      } else {
        alert("Mảng trống!");
      }
      break;

    case 7:
      alert("Thoát chương trình!");
      break;
  }
} while (choice !== 7);
