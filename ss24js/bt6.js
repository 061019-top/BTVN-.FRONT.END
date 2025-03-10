let str = "";
let choice;

do {
  choice = Number(
    prompt(
      `===== MENU =====
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự trong chuỗi
5. Kiểm tra chuỗi có phải chuỗi đối xứng không
6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
7. Thoát chương trình
================
Lựa chọn của bạn:`
    )
  );

  switch (choice) {
    case 1:
      str = prompt("Nhập chuỗi:");
      alert("Chuỗi đã được nhập!");
      break;

    case 2:
      if (str === "") {
        alert("Chuỗi chưa được nhập!");
      } else {
        alert("Chuỗi hiện tại: " + str);
      }
      break;

    case 3:
      if (str === "") {
        alert("Chuỗi chưa được nhập!");
      } else {
        alert("Độ dài của chuỗi: " + str.length);
      }
      break;

    case 4:
      if (str === "") {
        alert("Chuỗi chưa được nhập!");
      } else {
        let charToCount = prompt("Nhập ký tự cần đếm:");
        if (charToCount.length !== 1) {
          alert("Vui lòng nhập một ký tự duy nhất!");
        } else {
          let count = 0;
          for (let i = 0; i < str.length; i++) {
            if (str[i] === charToCount) {
              count++;
            }
          }
          alert(`Ký tự '${charToCount}' xuất hiện ${count} lần trong chuỗi.`);
        }
      }
      break;

    case 5:
      if (str === "") {
        alert("Chuỗi chưa được nhập!");
      } else {
        let isPalindrome = true;
        for (let i = 0; i < Math.floor(str.length / 2); i++) {
          if (str[i] !== str[str.length - 1 - i]) {
            isPalindrome = false;
            break;
          }
        }
        alert(
          isPalindrome
            ? "Chuỗi là chuỗi đối xứng."
            : "Chuỗi không phải là chuỗi đối xứng."
        );
      }
      break;

    case 6:
      if (str === "") {
        alert("Chuỗi chưa được nhập!");
      } else {
        let words = str.split(" ");
        for (let i = 0; i < words.length; i++) {
          words[i] =
            words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        }
        str = words.join(" ");
        alert("Chuỗi sau khi chuyển đổi: " + str);
      }
      break;

    case 7:
      alert("Thoát chương trình!");
      break;

    default:
      alert("Lựa chọn không hợp lệ!");
  }
} while (choice !== 7);
