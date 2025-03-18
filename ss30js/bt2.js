/* 
1. Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
2. Thêm sách mới vào kho
3. Tìm kiếm sách theo tên hoặc id.
4. Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
5. Sắp xếp sách theo giá:
    1.Tăng dần.
    2.Giảm dần.
6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
7. Hiển thị tổng số lượng sách trong kho.
8. Thoát chương trình.
 */
// let listBook = [];
// do {
//   switch (choice) {
//     case 1:
//       break;
//     case 2:
//       break;
//     case 3:
//       break;
//     case 4:
//       break;
//     case 5:
//       break;
//     case 6:
//       break;
//     case 7:
//       break;
//     case 8:
//       break;
//   }
// } while (choice != 8);

// // Function hiển thị danh sách theo thể  loại
// function displayBookCategory(lisbook) {
//   let choice = +prompt(`
//         Mời bạn chọn thể loại:
//             1.Khoa học
//             2.Hành động
//             3.Tiểu thuyết
//         `);
//   if (Number.isInteger(choice)) {
//     if (choice == 1) {
//       let listBookCategory = listBook.filter(
//         (book) => book.category === "Khoa học"
//       );
//     } else if (choice == 2) {
//       let listBookCategory = listBook.filter(
//         (book) => book.category === "Hành động"
//       );
//     } else {
//       let listBookCategory = listBook.filter(
//         (book) => book.category === "Tiểu thuyết"
//       );
//     }
//   } else {
//     console.log("Lựa chọn không hợp lệ mời nhập lại ");
//   }
//   console.log(`Thể loại bạn lựa chọn là ${listBookCategory}`);
// }
// // Thêm sách mới vào kho
// function addBook(lisBook) {
//   let id = listBook.length == 0 ? 1 : listBook[length - 1].id + 1;
//   do {
//     let bookName = prompt(`Mời bạn nhập tên sách`);
//   } while (bookName == "");
//   do {
//     let bookPrice = prompt(`Mời bạn nhập giá sách`);
//   } while (bookPrice == "" || bookPrice < -1);
//   do {
//     let bookQuantity = prompt(`Mời bạn nhập số lượng sách`);
//   } while (bookQuantity == "" || bookQuantity < -1);
//   do {
//     let bookCategory = prompt(`Mời bạn nhập thể loại sách`);
//   } while (bookCategory == "" || bookCategory < -1);
// }
// // Tìm kiếm sách theo tên hoặc id
// function searchBookByName(lisBook) {
//   let nameBook = prompt(`Mời bạn nhập tên sách`);
//   let listNewBook = listBook.filter((book) =>
//     book.name.toLowerCase().includes(nameBook.toLowerCase())
//   );
//   console.log(listNewBook);
// }
// Khởi tạo dữ liệu sách
let books = [
  { id: 1, name: "Book A", price: 100, quantity: 10, category: "Fiction" },
  { id: 2, name: "Book B", price: 150, quantity: 5, category: "Science" },
  { id: 3, name: "Book C", price: 200, quantity: 8, category: "History" },
];

// Khởi tạo giỏ hàng
let cart = [];

// Chương trình chính
function manageBooks() {
  let isRunning = true;

  while (isRunning) {
    console.log("\nCHƯƠNG TRÌNH QUẢN LÝ SÁCH");
    console.log("1. Hiển thị sách theo thể loại");
    console.log("2. Thêm sách mới vào kho");
    console.log("3. Tìm kiếm sách theo tên hoặc id");
    console.log("4. Mua sách");
    console.log("5. Sắp xếp sách theo giá");
    console.log("6. Tính tổng số lượng và tổng tiền sách đã mua");
    console.log("7. Hiển thị tổng số lượng sách trong kho");
    console.log("8. Thoát chương trình");
    const choice = Number(prompt("Nhập lựa chọn của bạn: "));

    switch (choice) {
      case 1:
        const category = prompt("Nhập thể loại sách muốn xem: ");
        const filteredBooks = books.filter(
          (book) => book.category === category
        );
        console.log("Sách trong thể loại " + category + ":");
        filteredBooks.forEach((book) => console.log(book));
        break;

      case 2:
        const id = Number(prompt("Nhập mã sách: "));
        const name = prompt("Nhập tên sách: ");
        const price = Number(prompt("Nhập giá sách: "));
        const quantity = Number(prompt("Nhập số lượng sách: "));
        const newCategory = prompt("Nhập thể loại sách: ");
        books.push({ id, name, price, quantity, category: newCategory });
        console.log(`${name} đã được thêm vào kho.`);
        break;

      case 3:
        const query = prompt("Nhập tên sách hoặc mã sách để tìm: ");
        const searchResult = books.filter(
          (book) => book.name.includes(query) || book.id === Number(query)
        );
        console.log("Kết quả tìm kiếm:", searchResult);
        break;

      case 4:
        const buyId = Number(prompt("Nhập mã sách cần mua: "));
        const buyQuantity = Number(prompt("Nhập số lượng sách cần mua: "));
        const book = books.find((b) => b.id === buyId);
        if (book && book.quantity >= buyQuantity) {
          book.quantity -= buyQuantity;
          cart.push({
            id: book.id,
            name: book.name,
            price: book.price,
            quantity: buyQuantity,
          });
          console.log(`Bạn đã mua ${buyQuantity} quyển ${book.name}.`);
        } else {
          console.log("Sách không đủ số lượng hoặc không tồn tại.");
        }
        break;

      case 5:
        const order = prompt(
          "Nhập 'asc' để sắp xếp tăng dần hoặc 'desc' để sắp xếp giảm dần: "
        );
        books.sort((a, b) =>
          order === "asc" ? a.price - b.price : b.price - a.price
        );
        console.log("Sách sau khi sắp xếp:", books);
        break;

      case 6:
        const totalBooks = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        console.log(
          `Tổng số sách đã mua: ${totalBooks}, Tổng tiền: ${totalPrice}`
        );
        break;

      case 7:
        const totalStock = books.reduce((sum, book) => sum + book.quantity, 0);
        console.log(`Tổng số lượng sách trong kho: ${totalStock}`);
        break;

      case 8:
        console.log("Thoát chương trình. Cảm ơn bạn!");
        isRunning = false;
        break;

      default:
        console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        break;
    }
  }
}

// Chạy chương trình
manageBooks();
