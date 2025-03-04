let num =Number(prompt("Nhập một số nguyên dương:"));

if (isNaN(num) || num < 1) {
    console.log("Dữ liệu nhập vào không hợp lệ");
} else {
    let result = [];
    for (let i = 5; i <= num; i += 5) {
        result.push(i);
    }
    console.log(`Các số chia hết cho 5 từ 1 đến ${num} là: ${result.join(", ")}`);
}