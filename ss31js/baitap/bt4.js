document.getElementsByClassName("open")[0].addEventListener("click", () => {
  document.getElementsByClassName("note")[0].style.display = "block";
  document.getElementsByClassName("header")[0].style.background =
    "rgb(119, 124, 121)";
});

document.getElementsByClassName("exit")[0].addEventListener("click", () => {
  document.getElementsByClassName("note")[0].style.display = "none";
  document.getElementsByClassName("header")[0].style.background = "white";
});
