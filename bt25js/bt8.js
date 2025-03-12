// Tạo hàm kiểm tra tính hợp lệ của mật khẩu
function isPasswordValid(password) {
    if (password.length < 8) {
        return false;
    }

    let numUpperCase = false;
    let numLowerCase = false;
    let num = false;

    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= "a" && char <= "z") {
            numLowerCase = true;
        } else if (char >= "A" && char <= "Z") {
            numUpperCase = true;
        } else if (char >= "0" && char <= "9") {
            num = true;
        }
    }
    return num && numLowerCase && numUpperCase;
    
}

// Set mật khẩu
function setPassword() {
    let password = prompt("Mời thiết lập mật khẩu: ");
    
    if (isPasswordValid(password)) {
        alert("Đặt mật khẩu thành công! Mật khẩu : " + password);
        return password;
    } else {
        alert(`Mật khẩu không hợp lệ:
        1. Có ít nhất 6 ký tự
        2. Có ít nhất 1 số
        3. Có ít nhất 1 ký tự viết hoa
        4. Có ít nhất 1 ký tự viết thường`);
        // Gọi lại hàm set mật khẩu
        setPassword();
    }
}
setPassword();
