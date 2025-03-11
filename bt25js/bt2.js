function sum(num1, num2) {
  if (Number.isInteger(num1) && Number.isInteger(num1)) {
    let total = num1 + num2;
    console.log(`Tổng hai số vừa nhập vào là`, total);
  } else {
    console.log(`Số nhập vào không hợp lệ`);
  }
}
num1 = +prompt(`Mời bạn nhập số đầu tiên`);
num2 = +prompt(`Mời bạn nhập só thứ hai`);
sum(num1, num2);
