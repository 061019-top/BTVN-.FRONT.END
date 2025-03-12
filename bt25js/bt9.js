
// Tạo hàm kiểm tra tính hợp lệ của tên người dùng
function isUsedValid(usedName ) {
    
    let numUpperCase = false;
    let numLowerCase = false;
    let num = false;
    let charEd = false;

    for (let i = 0; i < usedName.length; i++) {
        let char = usedName[i];
        if (char >= "a" && char <= "z") {
            numLowerCase = true;
        } else if (char >= "A" && char <= "Z") {
            numUpperCase = true;
        } else if (char == "@") {
            num = true;
        }else if(char=="."){
            let charEnd = usedName.split(".");
            if(charEnd==".com"||charEnd==".vn")
            end = true;
        }
    }
    return num && numLowerCase && numUpperCase && charEnd;
    
}

// Set mật khẩu
function setUsed() {
    let usedName = prompt("Mời thiết lập tên tài khoản ");
    
    if (isUsedValid(usedName )) {
        alert("Đặt têm tài khoản thành công! Tài khoản : " + usedName);
        return usedName ;
    } else {
        alert(`Tên tài khoản không hợp lệ:
        1. Có kí tự @
        2. Có ít nhất 1 số
        3. Có ít nhất 1 ký tự viết hoa
        4. Có ít nhất 1 ký tự viết thường`);
        // Gọi lại hàm setUsed
        setUsed();
    }
}
setUsed();
