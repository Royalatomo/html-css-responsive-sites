
// Make Navmenu visible (mobile)
document.getElementsByClassName('nav-menu')[0].style.display = 'grid'



const element = document.getElementsByClassName('nav-menu')[0];

// Make Navbar visible/ Toggle Menu Bar
const showMenu = () => {
    const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    if(height < 510){
        toggelMenu();

    }else{
        console.log(height);
        element.classList.add('showMenu')
    }
}

// Toggle Menu Bar
const toggelMenu = () => {
    const isActive = element.className.split(' ')[1] == "showMenu";
    if(isActive){
        element.classList.remove('showMenu');
    }else{
        element.classList.add('showMenu');
    }
}

// Hide Menu Bar
const closeMenu = () => {
    element.classList.remove('showMenu')
}

// Hide Navbar on clicking link
let links = document.getElementsByClassName('nav-icon-clickable');
for (let i=0; i<=links.length; i++){
    try{
        links[i].addEventListener('click', toggelMenu)
    }catch{}
}


// Fix Navbar - when scrolled down
const navbarHolder = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 70) {
        navbarHolder.classList.add("stick-nav");
    }
    else {
        navbarHolder.classList.remove("stick-nav");
    }
})
