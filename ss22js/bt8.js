let number = prompt("Nhập một chuỗi:");

if (!isNaN(number) && number.trim() !== "") {
    let arr = number.split("").map(Number);
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("Số lớn nhất là: " + max);
} else {
    console.log("Không hợp lệ");
}