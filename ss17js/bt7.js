let input =+prompt("Mời bạn nhập số tiền");
let result = input.toLocaleString("vi-VN", {style:"currency", currency:"VND"});
document.write(`Số tiền bạn vừa nhập là`+result);