let arr=[];
let flag=0;
let n=+prompt("Moi ban nhap so luong phan tu mang muon them")
//  lay kis tu mang tu nguoi dung
for(let i = 0; i < n; i++){
    let input=+prompt("Moi ban nhap vao ki tu cua mang");
    arr.push(input);
}
if (arr.length==0) {
    console.log("Mang nhap vao rong");
} 
console.log(arr);

// duyet mang 
for(let i = 0; i < arr.length; i++){
    if (arr[i]<0) {
        flag++;
    } 
}
if(flag>0){
    console.log("So luong so nguyen am trong mang la "+flag);
}

