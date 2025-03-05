let n = Number(prompt("Nhập số nguyên: "));
let count = 0;
let num = 2;
let str = "";
if (!Number.isInteger(n) || n <= 0) {
    console.log("Không hợp lệ");
}else{
    while (count < n) {
        let flag = true; 
        for (let i = 2; i * i <= numb; i++) {
            if (numb % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (flag) {
            str += num + " ";
            count++;
        }
        num++;
    }
    console.log(str);    
}