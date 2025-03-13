function tinhDienTichHinhTron(radius) {
    return Math.PI * Math.pow(radius, 2);
}
function tinhChuViHinhTron(radius) {
    return 2 * Math.PI * radius;
}
function tinhDienTichHinhChuNhat(length, width) {
    return length * width;
}
function tinhChuViHinhChuNhat(length, width) {
    return 2 * (length + width);
}
function mainMenu() {
    let choice;
    do {
        choice = parseInt(prompt("Chọn chức năng:\n1. Tính diện tích hình tròn\n2. Tính chu vi hình tròn\n3. Tính diện tích hình chữ nhật\n4. Tính chu vi hình chữ nhật\n5. Thoát"));
        switch (choice) {
            case 1:
                let radius1 = parseFloat(prompt("Nhập bán kính hình tròn:"));
                console.log("Diện tích hình tròn: " + tinhDienTichHinhTron(radius1));
                break;
            case 2:
                let radius2 = parseFloat(prompt("Nhập bán kính hình tròn:"));
                console.log("Chu vi hình tròn: " + tinhChuViHinhTron(radius2));
                break;
            case 3:
                let length1 = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
                let width1 = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
                console.log("Diện tích hình chữ nhật: " + tinhDienTichHinhChuNhat(length1, width1));
                break;
            case 4:
                let length2 = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
                let width2 = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
                console.log("Chu vi hình chữ nhật: " + tinhChuViHinhChuNhat(length2, width2));
                break;
            case 5:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (choice !== 5);
}
mainMenu();
