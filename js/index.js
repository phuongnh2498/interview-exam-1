const header = document.getElementById("header-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    // Add a background color when scrolling down
    header.classList.add("sticky-nav");
  } else {
    // Reset to the initial background color when at the top
    header.classList.remove("sticky-nav");
  }
});

let list_id_nav = ["nav1", "nav2", "nav3", "nav4", "nav5"];
let cur_nav_state = "nav1";

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    // Remove the "active" class from all items
    navItems.forEach((navItem) => {
      navItem.classList.remove("nav-active");
    });

    // Add the "active" class to the currently hovered item
    item.classList.add("nav-active");
  });
});
