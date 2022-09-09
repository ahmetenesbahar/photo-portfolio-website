window.onscroll = () => {
  stickyFunction();
  colorFunction();
};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

const stickyFunction = () => {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

const portfolio = document.getElementById("portfolio");
const about = document.getElementById("about");
const services = document.getElementById("services");
const contact = document.getElementById("contact");
const list = document.querySelector("#navbar ul");

const portfolioOffsetTop = portfolio.offsetTop;
const aboutOffsetTop = about.offsetTop;
const servicesOffsetTop = services.offsetTop;
const contactOffsetTop = contact.offsetTop;

const colorFunction = () => {
  if (
    window.pageYOffset >= aboutOffsetTop &&
    window.pageYOffset < servicesOffsetTop
  ) {
    list.children[0].classList.add("active");
    list.children[1].classList.remove("active");
    list.children[2].classList.remove("active");
    list.children[3].classList.remove("active");
  } else if (
    window.pageYOffset >= servicesOffsetTop &&
    window.pageYOffset < portfolioOffsetTop
  ) {
    list.children[1].classList.add("active");
    list.children[0].classList.remove("active");
    list.children[2].classList.remove("active");
    list.children[3].classList.remove("active");
  } else if (
    window.pageYOffset >= portfolioOffsetTop &&
    window.pageYOffset < contactOffsetTop
  ) {
    list.children[0].classList.remove("active");
    list.children[1].classList.remove("active");
    list.children[3].classList.remove("active");
    list.children[2].classList.add("active");
  } else if (window.pageYOffset >= contactOffsetTop) {
    list.children[3].classList.add("active");
    list.children[0].classList.remove("active");
    list.children[1].classList.remove("active");
    list.children[2].classList.remove("active");
  } else {
    list.children[2].classList.remove("active");
    list.children[0].classList.remove("active");
    list.children[1].classList.remove("active");
    list.children[3].classList.remove("active");
  }
};
