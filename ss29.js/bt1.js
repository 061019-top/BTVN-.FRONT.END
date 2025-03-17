let contacts = [];

let addContact = (id, name, email, phone) => {
  let contact = { id, name, email, phone };
  if (contacts.some((c) => c.id === id)) {
    console.log("ID đã tồn tại! Vui lòng chọn ID khác.");
    return false;
  }
  contacts.push(contact);
  console.log(`Đã thêm liên hệ: ${name}`);
  return true;
};

let displayContacts = () => {
  if (contacts.length === 0) {
    console.log("Danh bạ trống!");
    return;
  }
  console.log("\n=== DANH SÁCH LIÊN HỆ ===");
  contacts.forEach((contact) => {
    console.log(`ID: ${contact.id}`);
    console.log(`Tên: ${contact.name}`);
    console.log(`Email: ${contact.email}`);
    console.log(`SĐT: ${contact.phone}`);
    console.log("----------------");
  });
};

let searchByPhone = (phone) => {
  let result = contacts.find((contact) => contact.phone === phone);
  if (result) {
    console.log("\n=== KẾT QUẢ TÌM KIẾM ===");
    console.log(`ID: ${result.id}`);
    console.log(`Tên: ${result.name}`);
    console.log(`Email: ${result.email}`);
    console.log(`SĐT: ${result.phone}`);
  } else {
    console.log("Không tìm thấy liên hệ với số điện thoại này!");
  }
  return result;
};

let updateContact = (id, name, email, phone) => {
  let contactIndex = contacts.findIndex((contact) => contact.id === id);
  if (contactIndex === -1) {
    console.log("Không tìm thấy liên hệ với ID này!");
    return false;
  }
  contacts[contactIndex].name = name || contacts[contactIndex].name;
  contacts[contactIndex].email = email || contacts[contactIndex].email;
  contacts[contactIndex].phone = phone || contacts[contactIndex].phone;
  console.log("Đã cập nhật thông tin liên hệ!");
  return true;
};

let deleteContact = (id) => {
  let initialLength = contacts.length;
  contacts = contacts.filter((contact) => contact.id !== id);
  if (contacts.length < initialLength) {
    console.log("Đã xóa liên hệ thành công!");
    return true;
  } else {
    console.log("Không tìm thấy liên hệ với ID này!");
    return false;
  }
};

let main = () => {
  addContact(1, "Nguyen Van A", "a@gmail.com", "0909123456");
  addContact(2, "Tran Thi B", "b@gmail.com", "0918234567");
  addContact(3, "Le Van C", "c@gmail.com", "0937345678");
  displayContacts();
  searchByPhone("0909123456");
  updateContact(1, "Nguyen Van A Updated", "a.updated@gmail.com", "0909999999");
  displayContacts();
  deleteContact(2);
  displayContacts();
};

main();
console.log("Đã thoát chương trình!");
