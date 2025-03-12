// let arr=[];
// function filterNumber(){
//     for(let i = 0; i< 10; i++){
//         let number =+prompt(`mời bạn nhập kí tự số ${i+1}`);
//         if(!Number.isInteger(number)){
//             console.log(`đây không phải là số`);
            
//         }else{
//             arr.push(number);
//         }
//     }
// }
// filterNumber()
// let newArray = arr.filter((item)=>{
//     return item >= 10;

// })
// (newArray.length == 0) ? (console.log(`mảng không có phần tử nào`)) : (console.log(newArray));
function filterNumber() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        let number = +prompt(`Mời bạn nhập kí tự số ${i + 1}`);
        if (!Number.isInteger(number)) {
            console.log(`Đây không phải là số`);
        } else {
            arr.push(number);
        }
    }
    return arr; // Trả về mảng đã nhập
}

let arr = filterNumber(); // Gọi hàm và gán kết quả cho arr
let newArray = arr.filter((item) => {
    return item >= 10;
});

newArray.length === 0
    ? console.log(`Mảng không có phần tử nào`)
    : console.log(newArray);



