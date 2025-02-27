let date1 = prompt("Nhập theo thứ tự năm-tháng-ngày sảy ra trước:");
let date2 = prompt("Nhập theo thứ tự năm-tháng-ngày sảy ra sau:");
let d1 = new Date(date1);
let d2 = new Date(date2);
let diffTime = Math.abs(d2 - d1);
let diffDays = Math.ceil(diffTime / (1000 * 60 *60 * 24));
document.write(`Độ lệch là ${diffDays} ngày`);
console.log(`Độ lệch là ${diffDays} ngày`)