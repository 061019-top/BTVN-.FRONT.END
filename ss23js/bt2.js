let arr =[1,2,4,6,9,10,34,7];
let flag=0;
let index =-1;
for(let i = 0; i < arr.length; i++){
    if(arr[i]> flag){
      flag=arr[i]; 
      index=i;
    }    
}
if (index>=0) {
    console.log("So lon nhat la "+flag);
    console.log("Vi tri cua "+flag+" la "+index);
    
}