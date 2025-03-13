let choice;
do {
    console.log("===== MENU =====");
    console.log("1. Nhập và tìm số bị thiếu");
    console.log("2. Thoát chương trình");
    console.log("================");
    choice = Number(prompt("Lựa chọn của bạn:"));
    if (choice === 1) {
        let input = prompt("Nhập mảng số nguyên (cách nhau bằng dấu phẩy, ví dụ: 1,2,3,5):");
        let arr = input.split(",").map(Number);
        if (!Array.isArray(arr) || arr.length === 0 || arr.some(isNaN)) {
            console.log("Dữ liệu không hợp lệ!");
        } else {
            let n = arr.length + 1;
            let expectedSum = (n * (n + 1)) / 2;
            let actualSum = 0;
            for (let i = 0; i < arr.length; i++) {
                actualSum += arr[i];
            }
            let missingNumber = expectedSum - actualSum;
            console.log("Số bị thiếu:", missingNumber);
        }
    } else if (choice === 2) {
        console.log("Thoát chương trình!");
    } else {
        console.log("Lựa chọn không hợp lệ!");
    }
} while (choice !== 2);
