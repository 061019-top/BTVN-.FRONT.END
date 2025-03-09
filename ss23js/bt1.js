let arr=[1,5,4,3,4,22,3,2,7,9];
let flag = 0;
for(let i = 0; i < arr.length; i++){
    if (arr[i] >= 10) {
        flag++;
        console.log("so "+arr[i]+ " lon hon 10 hoac bang 10");
    }
}
if (flag == 0) {
    console.log(" mang khong co phan tu nao lon hon 10" );
    
}