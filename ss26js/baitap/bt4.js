function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function filterPrimes(input) {
    if (!Array.isArray(input)) {
        return "Dữ liệu không hợp lệ";
    }
    if (input.length === 0) {
        return "Mảng không có phần tử nào";
    }
    let result = input.filter(num => typeof num === 'number' && Number.isInteger(num) && isPrime(num));
    return result.length > 0 ? result : "Mảng không có phần tử nào";
}
console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(filterPrimes([]));
console.log(filterPrimes("abc"));