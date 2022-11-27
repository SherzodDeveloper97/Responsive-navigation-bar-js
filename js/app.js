const navAnimation = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-link--container");
  const navLinks = document.querySelectorAll(".nav-link");

  //   Toggle nav:
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //   Animate Links:
    navLinks.forEach((link, index) => {
      // console.log(index, link);
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkMove 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
      }
    });

    // Animated Burger
    burger.classList.toggle("toggle");
  });
};
navAnimation();
