
function timDoiXung(input) {
    let result = [];
    for (let i = input.length - 1; i >= 0; i--) {
        result.push(input[i]);
    }
    // So sánh hai mảng hàm JSON.stringify để sss hai mảng
    if (JSON.stringify(result) === JSON.stringify(input)) {
        console.log(`đây là số đối xứng`);
    } else {
        console.log(`không phải là số đối xứng`);
    }
}

timDoiXung([9, 9, 4, 9, 9]);


// function kiemTraDoiXung(input) {
//     let reversed = input.split('').reverse().join('');
//     if (input === reversed) {
//         return "là chuỗi đối xứng";
//     } else {
//         return "không phải chuỗi đối xứng";
//     }
// }
