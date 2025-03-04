let str ="";
str = prompt("nhap chuoi");
let char =prompt("moi ban nhap ki tu muon tim");
index= str.indexOf(char);
if (index !=-1) {
    console.log("ton tai ki tu ban can tim");  
} else {
    console.log("khong ton tai ki tu ban can tim");
    
}