let arr = [];
let flag = 0;
let num = Number(prompt("Mời bạn nhập kí tự trong mảng"));
for(let i = 0; i < num; i++){
    let input = +prompt("Mời bạn nhập kí tự số"+i+1);
    arr.push(input);
    if (!Number.isNaN(arr[i])){
        flag++;
        console.log(arr[i]);
    }
}
if(flag == 0){
    console.log(`Không có kí tự số`);
}