let a = Number(prompt("nhập a ( Cơ số)"));
let b = Number(prompt("nhập b (số mũ)"));
if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b) || !Number.isInteger(b)) {
    console.log("Không hợp lệ vui lòng nhập lại");
    location.reload();
} else {
    let result = 1;
    let isNegativeExponent = b < 0;
    b = Math.abs(b);

    for (let i = 0; i < b; i++) {
        result *= a;
    }

    if (isNegativeExponent) {
        result = 1 / result;
    }

    console.log("kết quả:",result);
}