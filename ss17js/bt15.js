let r = Number(prompt("Nhập số bán kính: "));
let ttcau = 4/3 * 3.14 * Math.pow(r, 3);
let sbemat = 4 * 3.14 * Math.pow(r, 2);
let chuvi = 2 * 3.14 * r;
console.log(`Thể tích hình cầu là: ${ttcau}`);
console.log(`Diện tích bề mặt hình cầu là: ${sbemat}`);
console.log(`Chu vi lớn nhất là: ${chuvi}`);