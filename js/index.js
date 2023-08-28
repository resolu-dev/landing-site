// const hamburger = document.querySelector(".hamburger");
// const sidebar = document.querySelector(".sidebar");
// const closeBtn = document.querySelector(".close-btn");
// const overlay = document.querySelector(".overlay");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   sidebar.classList.toggle("active");
//   overlay.style.display = "block";

//   if (sidebar.classList.contains("active")) {
//     // Prevent scrolling when sidebar is active
//     document.body.style.overflow = "hidden";
//   } else {
//     // Allow scrolling when sidebar is closed
//     document.body.style.overflow = "auto";
//   }
// });

// closeBtn.addEventListener("click", () => {
//   hamburger.classList.remove("active");
//   sidebar.classList.remove("active");
//   overlay.style.display = "none";

//   // Allow scrolling when sidebar is closed
//   document.body.style.overflow = "auto";
// });

const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  toggleSidebar();
});

closeBtn.addEventListener("click", () => {
  toggleSidebar();
});

overlay.addEventListener("click", () => {
  toggleSidebar();
});

function toggleSidebar() {
  hamburger.classList.toggle("active");
  sidebar.classList.toggle("active");
  overlay.style.display = sidebar.classList.contains("active")
    ? "block"
    : "none";

  if (sidebar.classList.contains("active")) {
    document.body.style.overflow = "hidden"; // Prevent scrolling when sidebar is active
  } else {
    document.body.style.overflow = "auto"; // Allow scrolling when sidebar is closed
  }
}
