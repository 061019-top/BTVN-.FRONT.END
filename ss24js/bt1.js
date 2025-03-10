let arr = [];
let flag = 0;
let choice;
do {
  console.log(`
==================== MENU ====================
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của một phần tử trong mảng
6. Sắp xếp mảng tăng dần
7. Thoát chương trình
============================================`);
  choice = parseInt(prompt("Nhập lựa chọn:"));

  switch (choice) {
    case 1:
      let quantity = +prompt("Nhập số lượng phần tử:");
      for (let i = 0; i < quantity; i++) {
        let num = +prompt(`Nhập phần tử thứ ${i + 1}:`);
        arr.push(num);
      }
      console.log("Mảng đã nhập:", arr);
      break;

    case 2:
      console.log("Các phần tử trong mảng:", arr);
      break;

    case 3:
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > flag) {
          flag = arr[i];
        }
      }
      console.log("Phần tử lớn nhất trong mảng là " + flag);

      let min = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
          min = arr[i];
        }
      }
      console.log(`Phần tử nhỏ nhất trong mảng là ${min}`);
      break;

    case 4:
      let sum;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      console.log(`Tổng phần tử trong mảnh là ${sum}`);
      break;

    case 5:
      let counts = {}; // Đối tượng để lưu số lần xuất hiện
      for (let i = 0; i < arr.length; i++) {
        let element = arr[i]; // Phần tử hiện tại
        if (counts[element]) {
          counts[element]++; // Tăng số lần xuất hiện
        } else {
          counts[element] = 1; // Nếu chưa có, gán bằng 1
        }
      }

      console.log("Số lần xuất hiện của các phần tử:", counts);
      break;

    case 6:
      for (let i = 0; i < arr.length - 1; i++) {
        // Vòng lặp ngoài
        for (let j = 0; j < arr.length - 1 - i; j++) {
          // Vòng lặp trong
          if (arr[j] > arr[j + 1]) {
            // So sánh hai phần tử liền kề
            let temp = arr[j]; // Lưu tạm giá trị arr[j]
            arr[j] = arr[j + 1]; // Đưa giá trị nhỏ hơn về trước
            arr[j + 1] = temp; // Đưa giá trị lớn hơn về sau
          }
        }
      }

      console.log("Mảng sau khi sắp xếp tăng dần:", arr);
      break;

    case 7:
      onsole.log("Thoát chương trình");
      break;

    default:
      console.log("Lựa chọn không hợp lệ");
  }
} while (choice !== 7);
