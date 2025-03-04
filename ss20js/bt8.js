let number = Number(prompt("Nhap vao mot so:"));
if (isNaN(number) || number <= 0 || !Number.isInteger(parseFloat(number))) {
    console.log("Không hợp lệ. Vui lòng nhập một số nguyên dương.");
} else{
    if ((number / number)===0,(number/1)===number){
        console.log(`${number} la so nguyen to`);
    }else{
        console.log(`${number} khong la so nguyen to`);
    }
}