let num= Number(prompt("Mời bạn nhập số bất kì"));
if (num>0&& Number.isInteger(num)) {
    let sum =0;
    for(let i=0;i<=num;i++){
        sum = sum + i;
    }
    console.log(sum);
} else {
    console.log("Mời bạn nhập lại");
}
