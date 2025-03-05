let passWord = "minh";
let input;
do {
    input = prompt("Nhập mật khẩu: ");
    if (input !==  passWord) {
        console.log("Sai mật khẩu hãy thử lại");
    }
} while (input !==  passWord);
console.log("Đăng nhập thành công!");
