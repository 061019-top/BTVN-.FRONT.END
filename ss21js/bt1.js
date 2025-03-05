let result = 0;
for (let i = 0; i < 5; i++){
    let num = Number(prompt("Mời bạn nhập số bất kì"));
    if (num % 2 != 0){
        result += num;
    }
}console.log(result);