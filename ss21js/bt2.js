let soChan = 0;
let soLe = 0;
for (let i = 0; i < 5; i++){
    let num = Number(prompt("Mời bạn nhập số bất kì"));
    if (num % 2 != 0){
        soLe += 1;
    }else{
        soChan += 1;
    }
}
console.log(`Có ${soChan}số chẵn,${soLe}số lẻ`);