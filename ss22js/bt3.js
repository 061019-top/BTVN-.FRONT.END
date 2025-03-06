let input = prompt("Mời bạn nhập vào số");
if (isNaN(input) || input.includes(" ")) {
    console.log("Đây không phải một số");
} else {
    let output = input.split('').reverse().join('');
    console.log("Số bạn nhập là " + input + " sau khi đảo ngược là " + output);
}
