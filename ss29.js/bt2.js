let products = [];

let addProduct = (id, name, price, category, quantity) => {
  let product = { id, name, price, category, quantity };
  if (products.some((p) => p.id === id)) {
    console.log("ID đã tồn tại! Vui lòng chọn ID khác.");
    return false;
  }
  products.push(product);
  console.log(`Đã thêm sản phẩm: ${name}`);
  return true;
};

let displayAllProducts = () => {
  if (products.length === 0) {
    console.log("Danh sách sản phẩm trống!");
    return;
  }
  console.log("\n=== DANH SÁCH SẢN PHẨM ===");
  products.forEach((product) => {
    console.log(`ID: ${product.id}`);
    console.log(`Tên: ${product.name}`);
    console.log(`Giá: ${product.price}`);
    console.log(`Danh mục: ${product.category}`);
    console.log(`Số lượng: ${product.quantity}`);
    console.log("----------------");
  });
};

let displayProductById = (id) => {
  let product = products.find((p) => p.id === id);
  if (product) {
    console.log("\n=== CHI TIẾT SẢN PHẨM ===");
    console.log(`ID: ${product.id}`);
    console.log(`Tên: ${product.name}`);
    console.log(`Giá: ${product.price}`);
    console.log(`Danh mục: ${product.category}`);
    console.log(`Số lượng: ${product.quantity}`);
  } else {
    console.log("Không tìm thấy sản phẩm với ID này!");
  }
  return product;
};

let updateProduct = (id, name, price, category, quantity) => {
  let productIndex = products.findIndex((p) => p.id === id);
  if (productIndex === -1) {
    console.log("Không tìm thấy sản phẩm với ID này!");
    return false;
  }
  products[productIndex].name = name || products[productIndex].name;
  products[productIndex].price = price || products[productIndex].price;
  products[productIndex].category = category || products[productIndex].category;
  products[productIndex].quantity = quantity || products[productIndex].quantity;
  console.log("Đã cập nhật thông tin sản phẩm!");
  return true;
};

let deleteProduct = (id) => {
  let initialLength = products.length;
  products = products.filter((p) => p.id !== id);
  if (products.length < initialLength) {
    console.log("Đã xóa sản phẩm thành công!");
    return true;
  } else {
    console.log("Không tìm thấy sản phẩm với ID này!");
    return false;
  }
};

let filterProductsByPrice = (minPrice, maxPrice) => {
  let filtered = products.filter(
    (p) => p.price >= minPrice && p.price <= maxPrice
  );
  if (filtered.length === 0) {
    console.log("Không tìm thấy sản phẩm trong khoảng giá này!");
    return;
  }
  console.log("\n=== SẢN PHẨM TRONG KHOẢNG GIÁ ===");
  filtered.forEach((product) => {
    console.log(`ID: ${product.id}`);
    console.log(`Tên: ${product.name}`);
    console.log(`Giá: ${product.price}`);
    console.log(`Danh mục: ${product.category}`);
    console.log(`Số lượng: ${product.quantity}`);
    console.log("----------------");
  });
};

let main = () => {
  addProduct(1, "Laptop Dell", 15000000, "Điện tử", 10);
  addProduct(2, "Iphone 14", 20000000, "Điện tử", 5);
  addProduct(3, "Áo thun", 150000, "Thời trang", 50);

  displayAllProducts();

  displayProductById(2);

  updateProduct(1, "Laptop Dell XPS", 18000000, "Điện tử", 8);

  displayAllProducts();

  filterProductsByPrice(100000, 10000000);

  deleteProduct(3);

  displayAllProducts();
};

main();
console.log("Đã thoát chương trình!");
