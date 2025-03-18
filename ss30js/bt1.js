/* 
1.Hiển thị các sản phẩm theo tên danh mục.
2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
   a.Sản phẩm không có trong cửa hàng hiển thị thông báo.
   b.Sản phẩm có trong cửa hàng
      i.Cho người dùng nhập số lượng sản phẩm muốn mua, mua thành công số lượng sản phẩm trong cửa hàng sẽ bị trừ đi.
      ii.Số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ hiển thị thông báo.
3.Sắp xếp các sản phẩm trong cửa hàng theo giá:
  a.Tăng dần.
  b.Giảm dần.
4.Tính số tiền thanh toán trong giỏ hàng.
5.Thoát.
*/
let product = [
  {
    id: 1,
    name: "mèn mén",
    price: 20000,
    quantity: 20,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 2,
    name: "mứt",
    price: 80000,
    quantity: 21,
    category: "món ăn dân tộc Kinh",
  },
  {
    id: 3,
    name: "cơm lam",
    price: 40000,
    quantity: 15,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 4,
    name: "bánh đậu xanh",
    price: 60000,
    quantity: 30,
    category: "món ăn dân tộc Kinh",
  },
];
// tao gio hang de di mua hang
let cart = [];
let choice;
do {
  choice = +prompt(`
        1.Hiển thị các sản phẩm theo tên danh mục.
        2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
        3.Sắp xếp các sản phẩm trong cửa hàng theo giá:
        4.Tính số tiền thanh toán trong giỏ hàng.
        5.Thoát.
        `);
  switch (choice) {
    case 1:
      showProduct();
      break;
    case 2:
      addtoCart();
      break;
    case 3:
      sortPriceProduct();
      break;
    case 4:
      getTotalPrice();
      break;
    case 5:
      console.log(`Thoát`);
      break;
  }
} while (choice != 5);
// Tạo hàm hiểm thị sản phẩm
function showProduct() {
  let choice = +prompt(`
        1. món dân tộc Kinh
        2. món dân tộc Mông
        `);
  if (choice == 1) {
    let result = product.filter((item) => item.category == "món dân tộc Kinh");
    console.log(result);
  } else if (choice == 2) {
    let result = product.filter((item) => item.category == "món dân tộc Kinh");
    console.log(result);
  } else {
    console.log(`Lựa chọn không hợp lệ`);
  }
}

// Function đi mua hàng
function addtoCart() {
  let productId = +promot(`nhập id sản phầm cần mua `);
  // kiểm tra xem sản phẩm có trong cửa hàng hay không
  let productIndex = product.findIndex((item) => item.id == productId);
  if (productIndex != 1) {
    // có sản phẩm
    // cho người dùh nhập số lượng cần mua
    let quantity = +prompt(`nhập số lượng`);
    if (quantity > product[productIndex].quantity) {
      console.log(`sản phẩm còn lại ${product[productIndex].quantity}`);
    } else {
      // trong trường hợp người  dùng nhập sô lượng mua thỏa mãn
      // giảm số lượng trong cửa hàng
      product[productIndex].quantity -= quantity;
      let cartIndex = cart.findIndex((item) => (item.id = productId));
      if (cartIndex != -1) {
        cart.push({ ...product[productIndex], quantity: quantity });
        console.log(`thêm sản phẩm thành công ${cart}`);
      } else {
        cart[cartIndex].quantity += quantity;
      }
    }
  } else {
    console.log(`không tồn tại sản phẩm ${productId}`);
  }
}
// Sắp xếp price
function sortPriceProduct() {
  let choice = +prompt(
    `Mời bạn nhập lựa chọn muốn sắp xếp:
             1. Tăng dần
             2. Giảm dần
          `
  );
  if (choice == 1) {
    product.sort((a, b) => a.price - b.price); // Sắp xếp tăng dần
    console.log("Danh sách sản phẩm sau khi sắp xếp tăng dần:");
    console.log(product); // Hiển thị danh sách sản phẩm
  } else if (choice == 2) {
    product.sort((a, b) => b.price - a.price); // Sắp xếp giảm dần
    console.log("Danh sách sản phẩm sau khi sắp xếp giảm dần:");
    console.log(product); // Hiển thị danh sách sản phẩm
  } else {
    console.log("Lựa chọn không hợp lệ. Vui lòng thử lại!");
  }
}
function getTotalPrice(cart) {
  let total = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  console.log(total);
}
