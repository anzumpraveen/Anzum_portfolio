
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
const allLinks = document.querySelectorAll("a.App_navLink__JICGV");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const sectionEl = document.querySelector(href);
      const offsetTop = sectionEl.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    // Close the navigation menu
    headerEl.classList.remove("nav-open");
  });
});
