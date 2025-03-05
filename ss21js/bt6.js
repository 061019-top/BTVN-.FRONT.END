let num = Number(prompt("Mời bạn nhập số bất kì"));
let str = "";
if(!Number.isInteger(num) || num == 0){
    console.log( `Số ${num} không hợp lệ`);
} else {
    if (num > 0){
        for (let i = 1; i <= num; i++){
            if (num % i == 0){
                str += i + ",";
            }
        }
        console.log(str.slice(0,-1));
    }else{
        for (let i = num; i <= Math.abs(num); i++){
            if (num % i == 0){
                str += i + ",";
            }
        }
        console.log(str.slice(0,-1));
    }
}