let textInput=[];
function text(){
    for(let i = 0; i < 6; i++){
        textInput[i]=prompt(`mời bạn nhập kí tự số ${i+1}`);
    }
}
text()

let newInput = textInput.filter((item)=>{
    return item.length > 5;

})
console.log(newInput);
