function calculateTotals(arr) {
    if (!Array.isArray(arr)) return "Dữ liệu không hợp lệ";
    if (arr.length === 0) return "Mảng không có dữ liệu";
    
    let totalEven = arr
        .filter(num => typeof num === 'number' && Number.isInteger(num) && num % 2 === 0)
        .reduce((sum, num) => sum + num, 0);
    
    let totalOdd = arr
        .filter(num => typeof num === 'number' && Number.isInteger(num) && num % 2 !== 0)
        .reduce((sum, num) => sum + num, 0);
    
    return `totalEven = ${totalEven}\ntotalOdd = ${totalOdd}`;
}

console.log(calculateTotals([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(calculateTotals([]));
console.log(calculateTotals("abc"));