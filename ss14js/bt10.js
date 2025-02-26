let numberOne = Number(prompt("Mời bạn nhập số đầu tiên"));
let numberTwo =Number(prompt("Mời bạn nhập số cuối cùng"));
let maxRamdom = Number(Math.ramdom() *(numberTwo -numberOne)+ numberOne);
document.write(`Số giữa trong`+numberOne+`va`+numberTwo+ `la:`+maxRamdom);