let selection =Number(prompt("Mời bạn nhập loại  tiền USD->VND:1 VND->USD:2"));
let index =Number(prompt("Mời bạn nhập giá trị muốn quy đổi"));
let result;
if (selection==1) {
    result=index*23000;
    alert(`Số tiền quy đổi sang VND là ${result}VND`);  
}else if(selection==2){
    result=index/23000;
    alert(`Số tiền quy đổi sang USD là ${result.toFixed(2)} USD`);
}
