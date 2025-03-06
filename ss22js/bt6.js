let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];

let inputNumber = Number(prompt("Nhập một số nguyên:"));

let count = numbers.filter(num => num === inputNumber).length;

if (count > 0) {
    console.log(`Số ${inputNumber} xuất hiện ${count} lần trong mảng`);
} else {
    console.log(`Số ${inputNumber} không tồn tại trong mảng`);
}