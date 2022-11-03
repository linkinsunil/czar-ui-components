const toggleSlideBtn = document.querySelector(".menu-logo");
const sideBar = document.querySelector(".docx-sidebar");

toggleSlideBtn.addEventListener("click", () => {
  sideBar.classList.toggle("show");
});
// code for automatically closing the sideBar; for selecting whole screen use document only
document.addEventListener(
  "click",
  () => {
    if (sideBar.classList.contains("show")) {
      sideBar.classList.remove("show");
    }
  },
  true
);
