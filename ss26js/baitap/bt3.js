function filterValidEmails(input) {
    if (!Array.isArray(input)) {
        return "Dữ liệu không hợp lệ";
    }
    if (input.length === 0) {
        return "Mảng không có phần tử nào";
    }
    let result = input.filter(email => typeof email === 'string' && email.includes('@') && !email.includes(' '));
    return result.length > 0 ? result : "Mảng không có phần tử nào";
}
console.log(filterValidEmails(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"]));
console.log(filterValidEmails([]));
console.log(filterValidEmails("abc"));