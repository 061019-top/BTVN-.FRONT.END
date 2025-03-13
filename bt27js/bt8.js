function maxNumber(n) {
    if (n < 0) return "dữ liệu không hợp lệ";
    
    const digits = String(n).split('').map(Number).sort((a, b) => b - a);
    return Number(digits.join(''));
}
console.log(maxNumber(2941));
console.log(maxNumber(3875));
console.log(maxNumber("1h8t"));