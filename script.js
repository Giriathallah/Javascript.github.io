document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");
    for (const link of links) {
      link.addEventListener("click", clickHandler);
    }
  
    function clickHandler(e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;
  
      scroll({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
  
const Judul = document.querySelector("#navbar header")
