/* 
Yêu cầu cho một mảng từ người dùg và thực hiện chức năng CRUD
*/

/* 
Cho người dùng nhập vào các lựa chọn 
1.Tạo phần tử 
2.Đọc ra các phần tử trong mảng 
3.1 Thêm vào vị trí người dùng muốn thêm 
3.2 Thêm tại ví trí đàu tiên của mảng 
3.3 Thêm tại vị trí cuối cùng của mảng 
4.1 Xóa vị trị người dùng muốn xóa 
4.2 Xóa tại vị trí đầu tiên 
4.3 Xóa tại vị vị trí cuối cùng 
5. Thoát chương trình 
*/

let arr = []; // Khởi tạo mảng ở ngoài để tất cả các case đều truy cập được
let choice;

do {
  console.log(`
      1. Tạo phần tử 
      2. Đọc ra các phần tử trong mảng 
      3. Thêm vào vị trí người dùng muốn thêm 
      4. Thêm tại vị trí đầu tiên của mảng 
      5. Thêm tại vị trí cuối cùng của mảng 
      6. Xóa tại vị trí người dùng muốn xóa 
      7. Xóa tại vị trí đầu tiên 
      8. Xóa tại vị trí cuối cùng 
      9. Thoát chương trình 
  `);

  choice = parseInt(prompt("Mời bạn nhập lựa chọn:"));

  switch (choice) {
    case 1: {
      let soLuong = parseInt(prompt("Mời bạn nhập số lượng phần tử muốn thêm vào mảng:"));
      for (let i = 0; i < soLuong; i++) {
        let num = parseInt(prompt(`Mời bạn nhập phần tử thứ ${i + 1}:`));
        arr.push(num);
        // Hai kiểu lấy giá trị từ người dùng vào mảng 
        // 1.arr[i]=+prompt(-----------);
        // 2.arr.push(arr[i];)
      }
      console.log("Thêm phần tử cho mảng thành công.");
      break;
    }
    case 2: {
      console.log(`Mảng hiện tại: [${arr.join(", ")}]`);
      break;
    }
    case 3: {
      let index =+prompt("Mời bạn nhập vị trí muốn thêm trong mảng:");
      let update =+prompt("Mời bạn nhập giá trị muốn thêm:");
      arr.splice(index-1, 0, update);
      console.log(`Mảng sau khi thêm tại vị trí ${index}: [${arr.join(", ")}]`);
      break;
    }
    case 4: {
      let update =+(prompt("Mời bạn nhập giá trị muốn thêm vào đầu mảng:"));
      arr.unshift(update);
      console.log(`Mảng sau khi thêm vào đầu: [${arr.join(", ")}]`);
      break;
    }
    case 5: {
      let update =+(prompt("Mời bạn nhập giá trị muốn thêm vào cuối mảng:"));
      arr.push(update);
      console.log(`Mảng sau khi thêm vào cuối: [${arr.join(", ")}]`);
      break;
    }
    case 6: {
      let indexDelete =+(prompt("Mời bạn nhập vị trí muốn xóa trong mảng:"));
      arr.splice(indexDelete, 1);
      console.log(`Mảng sau khi xóa tại vị trí ${indexDelete}: [${arr.join(", ")}]`);
      break;
    }
    case 7: {
      arr.shift();
      console.log(`Mảng sau khi xóa phần tử đầu tiên: [${arr.join(", ")}]`);
      break;
    }
    case 8: {
      arr.pop();
      console.log(`Mảng sau khi xóa phần tử cuối cùng: [${arr.join(", ")}]`);
      break;
    }
    case 9: {
      console.log("Thoát chương trình.");
      break;
    }
    default: {
      console.log("Lựa chọn không hợp lệ.");
      break;
    }
  }
} while (choice !== 9);
