function countNumber(arr){
    if( !Array.isArray(arr)){
         console.log(`Mang khong phu hop`); 
    }
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0 && Number.isInteger(arr[i])){
            count++;
        }
    }
    (count==0)?(console.log(`Không có số nguyên dương trong mảng`)) : (console.log(`Số nguyên dương trong mảng là`,count));
}
countNumber(arr[2,4,3,5,-1,3,-4]);
/* nếu arr vào là "hello" kiểm tra có phải mảng không > sai >! đúng 
   nếu arr vào là [2,3,3] kiểm tra có phải mảng không > đúng >! sai
*/