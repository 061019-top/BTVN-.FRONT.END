let money =Number(prompt("Mời bạn nhập số tiền muốn gửi"));
let date =Number(prompt("Mời bạn nhập số tháng muốn gửi"));
let sum= (money * 0.043 * date * 30)/365;
alert(`${sum}`);