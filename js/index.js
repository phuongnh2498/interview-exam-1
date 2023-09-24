document.addEventListener("DOMContentLoaded", function () {
  let currentSectionIndex = 0;
  const pageNumbers = document.querySelectorAll(".page-number");
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("section");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  function setActiveSection(index, manually = false) {
    if (!manually) {
      sections.forEach((section, i) => {
        if (i === index) {
          section.scrollIntoView({ behavior: "smooth" }); // Scroll to the active section
        }
      });
    }

    pageNumbers.forEach((pageNumber, i) => {
      if (i === index) {
        pageNumber.classList.add("page-number-active");
      } else {
        pageNumber.classList.remove("page-number-active");
      }
    });

    navItems.forEach((pageNumber, i) => {
      if (i === index) {
        pageNumber.classList.add("nav-active");
      } else {
        pageNumber.classList.remove("nav-active");
      }
    });
  }

  navItems.forEach((pageNumber, index) => {
    pageNumber.addEventListener("click", () => {
      currentSectionIndex = index;
      setActiveSection(currentSectionIndex);
    });
  });

  pageNumbers.forEach((pageNumber, index) => {
    pageNumber.addEventListener("click", () => {
      currentSectionIndex = index;
      setActiveSection(currentSectionIndex);
    });
  });

  prevButton.addEventListener("click", () => {
    if (currentSectionIndex > 0) {
      currentSectionIndex--;
      setActiveSection(currentSectionIndex);
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
      setActiveSection(currentSectionIndex);
    }
  });

  // manually scroll observer
  function handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute("id");
        const index = Array.from(sections).findIndex(
          (section) => section.getAttribute("id") === sectionId
        );
        if (index !== -1) {
          currentSectionIndex = index;
          setActiveSection(currentSectionIndex, true);
        }
      }
    });
  }

  // Create an Intersection Observer to track section intersections
  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1, // 50% of the section needs to be visible
  });

  sections.forEach((section) => {
    observer.observe(section);
  });

  //add scroll behavior
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

  //add toggle hamburger

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("#header-nav");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu-open");
  });
});
