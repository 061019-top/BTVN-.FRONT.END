let string =prompt("Moi ban nhap vao so bat ki");
let b = "";
for (let i=string.length-1;i>=0;i--){
    b+=string[i]
}
if (string===b) {
    console.log("so "+b+" la so doi cua "+string);
}else{
    console.log("so "+string+" ban vua nhap khong co so doi");
    
}
  