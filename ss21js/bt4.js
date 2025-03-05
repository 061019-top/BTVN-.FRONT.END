let a = Number(prompt("Mời bạn nhập giá trị cuả a"));
let b = Number(prompt("Mời bạn nhập giá trị cuả b"));
let c = Number(prompt("Mời bạn nhập giá trị cuả c"));

if (a == 0) {
    if (b == 0) {
        if (c == 0) {
            console.log('Phương trình vô số nghiệm');
        } else {
            console.log('Phương trình vô nghiệm');
        }
    } else {
        let x = -c / b;
        console.log('Nghiệm phương trình x = ' + x);
    }
} else {
    let dt = b * b - 4 * a * c;
    if (dt < 0) {
        console.log('Phương trình vô nghiệm');
    } else if (dt == 0) {
        let x = -b / (2 * a);
        console.log('Nghiệm phương trình x1 = x2 = ' + x);
    } else {
        let x1 = (-b + Math.sqrt(dt)) / (2 * a);
        let x2 = (-b - Math.sqrt(dt)) / (2 * a);
        console.log(`Nghiệm x1 = ${x1}, x2 = ${x2}`);
    }
}
