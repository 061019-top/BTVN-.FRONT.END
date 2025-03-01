let math =Number(prompt("Mời bạn nhập điểm toán"));
let literature =Number(prompt("Mời bạn nhập điểm văn"));
let english =Number(prompt("Mời bạn nhập điểm anh"));
let result =((math + literature + english)/3);
if(result>=8){
    alert(`Học lực của bạn là Giỏi`);
}else if (result>=6.5 && result<=7.9){
    alert(`Học lực của bạn là Khá`);
}else if (result<=5){
    alert(`Học lực trung bình `);
}

