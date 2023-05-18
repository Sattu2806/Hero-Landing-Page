const menu = document.querySelector("#menu");
const navBar = document.querySelector(".navbar_list");

menu.addEventListener('click', toggleNavigation);

// menu.onClick = () =>{
//     menu.classList.toggle('bx-menu');
//     navBar.classList.toggle('open');
//     console.log('fired')
// }

function toggleNavigation() {
    if (navBar.classList.contains("is-open")) {
        navBar.classList.remove("is-open");
    } else {
        navBar.classList.add("is-open");
    }
}