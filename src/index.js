import './styles.css';
import { loadHomePage } from './home.js'
import { loadMenuPage } from './menu.js'
import { loadAboutPage } from './about.js'

loadHomePage();

function reloadPage() {
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
}

var home = document.getElementById("home");
console.log(home);
home.addEventListener('click', function() {
    reloadPage();
    loadHomePage();
});

var menu = document.getElementById("menu");
menu.addEventListener('click', function() {
    reloadPage();
    loadMenuPage();
});

var about = document.getElementById("about");
about.addEventListener('click', function() {
    reloadPage();
    loadAboutPage();
});

console.log("Hello");