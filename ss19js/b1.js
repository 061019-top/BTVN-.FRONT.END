let month = Number(prompt("Mời bạn nhập tháng"));
if (month==2) {
    alert(`tháng ${month} có 28 hoặc 29 ngày năm nhuận`)  
}else if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
    alert(`tháng ${month} có 31 ngày`);
}else if(month==4||month==6||month==9){
    alert(`tháng ${month} có 30 ngày`);
}else{
    alert(`tháng ${month} không tồn tại`);
}
