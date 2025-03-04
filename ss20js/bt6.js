let n = Number(prompt("Nhập số nguyên:"));
let isNaN = n > 1;
for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
        isNaN = false;
        break;
    }
}
console.log(isNaN ? "Là số nguyên tố" : "Không phải là số nguyên tố");