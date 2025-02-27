// Sử dụng Math.abs() - Trả về giá trị tuyệt đối của số được truyền vào
console.log(Math.abs(-5.5)); // Kết quả: 5.5 
// Giải thích: Hàm Math.abs() trả về giá trị tuyệt đối của -5.5, tức là loại bỏ dấu âm.

console.log(Math.abs(10)); // Kết quả: 10
// Giải thích: Giá trị tuyệt đối của 10 vẫn là 10, nên kết quả không thay đổi.

// Sử dụng Math.ceil() - Làm tròn lên số nguyên gần nhất
console.log(Math.ceil(4.4)); // Kết quả: 5
// Giải thích: 4.4 được làm tròn lên thành 5 vì Math.ceil() luôn làm tròn lên.

console.log(Math.ceil(5.8)); // Kết quả: 6
// Giải thích: 5.8 được làm tròn lên thành 6 vì Math.ceil() luôn làm tròn lên.

// Sử dụng Math.floor() - Làm tròn xuống số nguyên gần nhất
console.log(Math.floor(5.7)); // Kết quả: 5
// Giải thích: 5.7 được làm tròn xuống thành 5 vì Math.floor() luôn làm tròn xuống.

console.log(Math.floor(6.1)); // Kết quả: 6
// Giải thích: 6.1 được làm tròn xuống thành 6 vì Math.floor() luôn làm tròn xuống.

// Sử dụng Math.round() - Làm tròn số theo quy tắc toán học
console.log(Math.round(10.1)); // Kết quả: 10
// Giải thích: 10.1 được làm tròn xuống thành 10 vì phần thập phân < 0.5.

console.log(Math.round(20.6)); // Kết quả: 21
// Giải thích: 20.6 được làm tròn lên thành 21 vì phần thập phân ≥ 0.5.