function checkLogin() {
  const fixedUsername = "huanrose@gmail.com";
  const fixedPassword = "123456";

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === fixedUsername && password === fixedPassword) {
    console.log("Đăng nhập thành công!");
  } else {
    console.log("Đăng nhập thất bại! Vui lòng kiểm tra lại.");
  }
}
