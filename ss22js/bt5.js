let arr=[1,4,7,8,3];
let sumOdd =0;
let sumEven =0;
for(let i=0;i<arr.length;i++){
    if (arr[i]%2==0) {
        sumEven +=arr[i]
    } else {
        sumOdd +=arr[i]
    }
}
console.log("Tổng số lẻ bạn vừa nhập là "+sumOdd+ " tổng các số chẵ là "+sumEven);
