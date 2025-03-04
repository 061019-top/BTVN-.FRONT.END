let n = prompt("Nhập số số Fibonacci sẽ hiển thị:");

if (isNaN(n) || n <= 0 || !Number.isInteger(parseFloat(n))) {
    console.log("Không hợp lệ");
} else {
    n = parseInt(n);
    let fibonacci = [1, 1];

    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    console.log(fibonacci.slice(0, n).join(" "));
}