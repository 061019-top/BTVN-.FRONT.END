function kiemTraSoNguyen(number){
    if(number==1){
        console.log(`Không phải số nguyên tố`);        
    }
    let flag = 0;
    for(let i = 1; i <= Math.sqrt(number); i++){
        if(number % i == 0){
            flag++;
        }
    }
    (flag==1) ? (console.log(`Đây là số nguyên tố`)) : (console.log(`Đây không phải là số nguyên tố`)); 
}
kiemTraSoNguyen(3)