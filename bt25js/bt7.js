function convertText(input) {
    let revesed=input.toLowerCase();
    let words = revesed.split(" ");
            let newStr = "";
            for (let i = 0; i < words.length; i++) {
                if (words[i] !== " ") {
                    newStr += words[i][0].toUpperCase() + words[i].slice(1) + " ";
                }
            }
            console.log(`Chuỗi sau khi chuyển đổi: ${newStr.trim()}`);
            
}
convertText("miNh cHu")