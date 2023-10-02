let profoil = document.querySelectorAll(".por li");
let imags = Array.from(document.images);

profoil.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", imagemanag);
});
function removeActive() {
  profoil.forEach((li) => {
    li.classList.remove("active");
    li.classList.add("active");
  });
}
function imagemanag() {
  imags.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
