let students = [];

function inputStudents(){
    let n = Number(prompt("nhập số lượng sinh viên:"));
    for (let i = 0; i < n;i++){
        let name = prompt(`Nhập tên đầy đủ sinh viên ${i + 1}:`);
        students.push(name);
    }
    console.log("Đã nhập xong danh sách sinh viên!");
}
function showStudents(){
    if (students.length ===0){
        console.log("Danh sách sinh viên trống!");
    }else{
        console.log("Danh sách sinh viên:\n" + students.join("\n"));
    }
}
function searchStudent() {
    let searchName = prompt("Nhập tên sinh viên cần tìm:");
    let found = false;
    for (let i = 0; i < students.length; i++) {
        if (students[i].toLowerCase().includes(searchName.toLowerCase())) {
            console.log("Sinh viên tìm thấy: " + students[i]);
            found = true;
        }
    }
    if (!found) {
        console.log("Không tìm thấy sinh viên trong danh sách!");
    }
}
/* function searchStudent() {
    let searchName = prompt("Nhập tên sinh viên cần tìm:");
    let found = false;
    for (let i = 0; i < students.length; i++) {
        let studentName = students[i].toLowerCase();
        let searchLowerCase = searchName.toLowerCase();
        if (studentName.includes(searchLowerCase) || studentName.split(' ').includes(searchLowerCase)) {
            console.log("Sinh viên tìm thấy: " + students[i]);
            found = true;
        }
    }
    if (!found) {
        console.log("Không tìm thấy sinh viên trong danh sách!");
    }
} */
function deleteStudents(){
    let deleteName = prompt("nhập tên sinh viên cần xoá:");
    let index = -1;
    for(let i = 0;i < students.length; i++ ){
        if (students[i].toLowerCase().includes(deleteName.toLowerCase())) {
            index = i;
            break;
        }
    }
    if (index !== -1) {
        students.splice(index, 1);
        console.log("Đã xóa sinh viên!");
    } else {
        console.log("Không tìm thấy sinh viên để xóa!");
    }
}
function mainMenu() {
    while (true) {
        let choice = prompt("MENU QUẢN LÝ SINH VIÊN\n1. Nhập danh sách sinh viên\n2. Hiển thị danh sách sinh viên\n3. Tìm sinh viên theo tên\n4. Xóa sinh viên\n5. Thoát\nChọn chức năng (1-5):");

        switch (choice) {
            case "1":
                inputStudents();
                break;
            case "2":
                showStudents();
                break;
            case "3":
                searchStudent();
                break;
            case "4":
                deleteStudents();
                break;
            case "5":
                console.log("Đã thoát chương trình!");
                return;
            default:
                console.log("Vui lòng chọn số từ 1 đến 5!");

        }
    }
}
mainMenu();