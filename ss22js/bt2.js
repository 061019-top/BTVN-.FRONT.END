let numbers = [2, 5, 7, 4, 1, 8, 6];
let input = prompt("Moi ban nhap vao so bat ki");
let flag = false; // Ban đầu, found được gán giá trị false
for (let i = 0; i < numbers.length; i++) {
    if (input == numbers[i]) { // Nếu giá trị đầu vào khớp với bất kỳ số nào trong mảng
        console.log("Bingo"); 
        flag = true; // Gán giá trị true cho found
        break; // Dừng vòng lặp
    }
}
if (!flag) { // Nếu found vẫn là false (không tìm thấy giá trị)
    console.log("Chuc ban may man lan sau");
}
