let a =Number(prompt("Mời bạn nhập giá trị của a"));
let b =Number(prompt("Mòi bạn nhập giá trị của b"));
let c =Number(prompt("Mòi bạn nhập giá trị của c"));
let del = (b * b - 4 * a * c);
let x1 =(-b+Math.sqrt(del))/(2*a);
let x2 =(-b-Math.sqrt(del))/(2*a);
alert(`Nghiệm x1 = ${x1}, nghiệm x2 = ${x2}`);

