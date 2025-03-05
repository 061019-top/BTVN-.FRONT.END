let money = Number(prompt("Nhập số tiền cần gửi: "));
let month = Number(prompt("Nhập số tháng cần gửi: "));
let interest = Number(prompt("Nhập số lãi xuất: "));
let oldMoney = money;
let newMoney =0;
if(Number.isInteger(month) && month > 0 && money > 0 && interest >0){
    for (let i = 0; i < month; i++){
        newMoney = money * (interest / 100);
        money += newMoney;
        newMoney = 0;
    }
    console.log(`Tiền lãi: ${money - oldMoney}`);
    console.log(`Tiền nhận được: ${money}`);
} else {
    console.log(`Không hợp lệ`);
}