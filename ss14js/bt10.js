let mot = Number(prompt("Mời bạn nhập số đầu tiên"));
let hai =Number(prompt("Mời bạn nhập số cuối cùng"));
let result = Math.floor(Math.random() * ( hai - mot ) + mot);
document.write(`Số bất kì giữa  ${mot}  và  ${hai}  la:  ${result} `);