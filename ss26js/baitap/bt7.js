function processArray(inputArray) {
    let result;
    if (!Array.isArray(inputArray) || !inputArray.every(num => typeof num === 'number')) {
        return "Dữ liệu không hợp lệ";
    }
    result = inputArray.map(num => num ** 2).filter(num => num % 2 === 0);
    return result.length > 0 ? result : "Mảng không có dữ liệu";
}
console.log(processArray([2, 5, 10]));    
console.log(processArray([]));            
console.log(processArray("abc"));         
console.log(processArray([1, 3, 5, 7]));  