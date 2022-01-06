// Show/Hide Nav links
function toggelLinks() {
    const element = document.getElementsByClassName('navbar-links')[0]
    const isShowing = "show-links" == element.className.split(' ')[1]

    if (isShowing) {
        element.classList.remove('show-links')
    } else {
        element.classList.add('show-links')
    }
}


// Fix Navbar - when scrolled down
const navbarHolder = document.querySelector(".navbar-holder");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 70) {
        navbarHolder.classList.add("stick-nav");
    }
    else {
        navbarHolder.classList.remove("stick-nav");
    }
})


// On Clicking Link - hide the nav links
const navBtn = document.getElementsByClassName("navbar-links")[0];
const links = document.getElementsByClassName("nav-links-container")[0];
links.addEventListener("click", () => {
    navBtn.classList.toggle("show-links");
})
