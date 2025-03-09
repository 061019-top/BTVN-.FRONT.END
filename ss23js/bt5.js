let array = [];
let numericCount = 0;
let totalSum = 0;
let numberOfElements = +prompt("Mời bạn nhập số lượng kí tự trong mảng ");

if (numberOfElements > 0) {
    for (let index = 0; index < numberOfElements; index++) {
        let element = +prompt("Mời bạ bạn nhập kí tự số +index + 1");
        array.push(element);
        if (!Number.isNaN(array[index])) {
            numericCount++;
            totalSum += array[index];
        }
    }
    if (numericCount === 0) {
        console.log("Không có kí tự số");
    } else {
        console.log(totalSum);
    }
} else if (numberOfElements === 0) {
    console.log("Mảng không có phần tử");
} else if (numberOfElements < 0){
    console.log("Số lượng phần tử trong mảng không được âm");
}
