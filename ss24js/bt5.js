let matrix = [];
let choice;

do {
  choice = Number(
    prompt(
      `===== MENU =====
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình
================
Lựa chọn của bạn:`
    )
  );

  switch (choice) {
    case 1:
      let rows = Number(prompt("Nhập số hàng của mảng:"));
      let cols = Number(prompt("Nhập số cột của mảng:"));

      if (rows > 0 && cols > 0) {
        matrix = [];
        for (let i = 0; i < rows; i++) {
          matrix[i] = [];
          for (let j = 0; j < cols; j++) {
            matrix[i][j] = Number(prompt(`Nhập phần tử [${i}][${j}]:`));
          }
        }
        alert("Nhập mảng thành công!");
      } else {
        alert("Số hàng và số cột phải lớn hơn 0!");
      }
      break;

    case 2:
      if (matrix.length === 0) {
        alert("Mảng chưa có phần tử nào!");
      } else {
        let result = "";
        for (let i = 0; i < matrix.length; i++) {
          result += matrix[i].join("     ") + "\n";
        }
        alert(`Mảng:\n${result}`);
      }
      break;

    case 3:
      if (matrix.length === 0) {
        alert("Mảng chưa có phần tử nào!");
      } else {
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
          }
        }
        alert(`Tổng các phần tử: ${sum}`);
      }
      break;

    case 4:
      if (matrix.length === 0) {
        alert("Mảng chưa có phần tử nào!");
      } else {
        let max = matrix[0][0];
        let maxRow = 0,
          maxCol = 0;

        for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > max) {
              max = matrix[i][j];
              maxRow = i;
              maxCol = j;
            }
          }
        }
        alert(`Phần tử lớn nhất: ${max} tại vị trí [${maxRow}][${maxCol}]`);
      }
      break;

    case 5:
      if (matrix.length === 0) {
        alert("Mảng chưa có phần tử nào!");
      } else {
        let row = Number(
          prompt(`Nhập hàng cần tính trung bình (0 đến ${matrix.length - 1}):`)
        );
        if (row >= 0 && row < matrix.length) {
          let sum = 0;
          for (let j = 0; j < matrix[row].length; j++) {
            sum += matrix[row][j];
          }
          let avg = sum / matrix[row].length;
          alert(`Trung bình cộng hàng ${row}: ${avg}`);
        } else {
          alert("Hàng không hợp lệ!");
        }
      }
      break;

    case 6:
      if (matrix.length === 0) {
        alert("Mảng chưa có phần tử nào!");
      } else {
        let reversedMatrix = [];
        for (let i = matrix.length - 1; i >= 0; i--) {
          reversedMatrix.push(matrix[i]);
        }
        matrix = reversedMatrix;
        let result = "";
        for (let i = 0; i < matrix.length; i++) {
          result += matrix[i].join("     ") + "\n";
        }
        alert(`Mảng sau khi đảo ngược các hàng:\n${result}`);
      }
      break;

    case 7:
      alert("Thoát chương trình!");
      break;

    default:
      alert("Lựa chọn không hợp lệ!");
  }
} while (choice !== 7);
