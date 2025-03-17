let menu = {
  "Khai vị": [],
  "Món chính": [],
  "Tráng miệng": [],
  "Đồ uống": [],
};

let addDish = (category, name, price, description) => {
  if (!menu[category]) {
    console.log("Danh mục không tồn tại!");
    return false;
  }
  let dish = { name, price, description };
  if (menu[category].some((d) => d.name === name)) {
    console.log("Món ăn đã tồn tại trong danh mục!");
    return false;
  }
  menu[category].push(dish);
  console.log(`Đã thêm ${name} vào ${category}`);
  return true;
};

let removeDish = (category, name) => {
  if (!menu[category]) {
    console.log("Danh mục không tồn tại!");
    return false;
  }
  let initialLength = menu[category].length;
  menu[category] = menu[category].filter((d) => d.name !== name);
  if (menu[category].length < initialLength) {
    console.log(`Đã xóa ${name} khỏi ${category}`);
    return true;
  } else {
    console.log("Không tìm thấy món ăn!");
    return false;
  }
};

let updateDish = (category, name, newName, price, description) => {
  if (!menu[category]) {
    console.log("Danh mục không tồn tại!");
    return false;
  }
  let dishIndex = menu[category].findIndex((d) => d.name === name);
  if (dishIndex === -1) {
    console.log("Không tìm thấy món ăn!");
    return false;
  }
  menu[category][dishIndex].name = newName || menu[category][dishIndex].name;
  menu[category][dishIndex].price = price || menu[category][dishIndex].price;
  menu[category][dishIndex].description =
    description || menu[category][dishIndex].description;
  console.log("Đã cập nhật thông tin món ăn!");
  return true;
};

let displayMenu = () => {
  console.log("\n=== MENU NHÀ HÀNG ===");
  for (let category in menu) {
    console.log(`\n${category}:`);
    if (menu[category].length === 0) {
      console.log("Chưa có món ăn nào");
      continue;
    }
    menu[category].forEach((dish) => {
      console.log(`- Tên: ${dish.name}`);
      console.log(`  Giá: ${dish.price} VNĐ`);
      console.log(`  Mô tả: ${dish.description}`);
      console.log("----------------");
    });
  }
};

let searchDish = (name) => {
  let found = false;
  for (let category in menu) {
    let dish = menu[category].find((d) => d.name === name);
    if (dish) {
      console.log("\n=== KẾT QUẢ TÌM KIẾM ===");
      console.log(`Danh mục: ${category}`);
      console.log(`Tên: ${dish.name}`);
      console.log(`Giá: ${dish.price} VNĐ`);
      console.log(`Mô tả: ${dish.description}`);
      found = true;
      break;
    }
  }
  if (!found) {
    console.log("Không tìm thấy món ăn!");
  }
};

let main = () => {
  addDish("Khai vị", "Gỏi ngó sen", 50000, "Ngó sen trộn tôm thịt");
  addDish(
    "Món chính",
    "Cơm chiên dương châu",
    60000,
    "Cơm chiên với trứng và thịt"
  );
  addDish("Tráng miệng", "Chè bưởi", 25000, "Chè bưởi ngọt thanh");
  addDish("Đồ uống", "Nước cam", 30000, "Cam tươi vắt nguyên chất");

  displayMenu();

  searchDish("Cơm chiên dương châu");

  updateDish(
    "Khai vị",
    "Gỏi ngó sen",
    "Gỏi ngó sen tôm thịt",
    55000,
    "Ngó sen trộn tôm thịt đặc biệt"
  );

  removeDish("Tráng miệng", "Chè bưởi");

  displayMenu();
};

main();
console.log("Đã thoát chương trình!");
