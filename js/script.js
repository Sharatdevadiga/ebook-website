// Add custom JavaScript here
function userScroll() {
  const navBar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navBar.classList.add("bg-dark");
      navBar.classList.add("navbar-stickey");
    } else {
      navBar.classList.remove("bg-dark");
      navBar.classList.remove("navbar-stickey");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
