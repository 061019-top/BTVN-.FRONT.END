let toanPoint = +prompt("Nhap diem toan cua ban");
let vatliPoint = +prompt("Nhap diem ly cua ban");
let hoaPoint = +prompt("Nhap diem hoa cua ban");
let average = (toanPoint+vatliPoint+hoaPoint)/3;
let sum = average.toFixed(2);
console.log("diem trung binh ",sum);


