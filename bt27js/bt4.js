let numbers = [];

function menu() {
    let choice;
    do {
        choice = parseInt(prompt("Chọn chức năng:\n1. Nhập danh sách số nguyên\n2. Tính trung bình các số\n3. Tìm số chẵn lớn nhất\n4. Tìm số lẻ nhỏ nhất\n5. Thoát"));
        switch (choice) {
            case 1:
                inputNumbers();
                break;
            case 2:
                alert("Trung bình các số: " + calculateAverage());
                break;
            case 3:
                alert("Số chẵn lớn nhất: " + findLargestEven());
                break;
            case 4:
                alert("Số lẻ nhỏ nhất: " + findSmallestOdd());
                break;
            case 5:
                alert("Thoát khỏi chương trình.");
                break;
            default:
                alert("Lựa chọn không hợp lệ.");
        }
    } while (choice !== 5);
}
function inputNumbers() {
    let num;
    let input;
    do {
        input = prompt("Nhập số nguyên (nhập 'stop' để dừng):");
        num = parseInt(input);
        if (!isNaN(num)) {
            numbers.push(num);
        }
    } while (input.toLowerCase() !== 'stop');
}
function calculateAverage() {
    let sum = numbers.reduce((acc, val) => acc + val, 0);
    return (sum / numbers.length) || 0;
}
function findLargestEven() {
    let largestEven = numbers.filter(num => num % 2 === 0).reduce((max, val) => val > max ? val : max, Number.MIN_SAFE_INTEGER);
    return largestEven === Number.MIN_SAFE_INTEGER ? "Không có số chẵn" : largestEven;
}
function findSmallestOdd() {
    let smallestOdd = numbers.filter(num => num % 2 !== 0).reduce((min, val) => val < min ? val : min, Number.MAX_SAFE_INTEGER);
    return smallestOdd === Number.MAX_SAFE_INTEGER ? "Không có số lẻ" : smallestOdd;
}
menu();