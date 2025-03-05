let a;
let b;
let c;
for (let i = 100; i <= 999; i++){
    let str = i.toString();
    a = Number(str[0]);
    b = Number(str[1]);
    c = Number(str[2]);
    if (a * a * a + b * b * b + c * c * c == i){
        console.log(i);
    }
}    