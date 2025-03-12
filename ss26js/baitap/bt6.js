function convertDateFormat(dateArray) {
    if (!(dateArray instanceof Array)) {
        return "Dữ liệu không hợp lệ";
    }
    if (dateArray.length === 0) {
        return "Mảng không có phần tử nào";
    }
    return dateArray.map(function (dateStr) {
        let parts = dateStr.split("-");
        if (parts.length !== 3) {
            return "Dữ liệu không hợp lệ";
        }
        let year = parts[0];
        let month = parts[1];
        let day = parts[2];
        if (isNaN(year) || isNaN(month) || isNaN(day)) {
            return "Dữ liệu không hợp lệ";
        }
        return day.concat("/", month, "/", year);
    });
}
console.log(convertDateFormat(["2025-03-10", "2024-12-25", "2023-07-01"]));
console.log(convertDateFormat([]));
console.log(convertDateFormat("abc"));
console.log(convertDateFormat(["2025-03-10", "invalid-date"]));