import pageLoadFunction from './pageLoadFunction.js';
import menuPage from './menuPage.js'
import homePage from './homePage.js';
import contactPage from './contactPage.js';

pageLoadFunction();
setupButtonListeners();

function setupButtonListeners(){
    const menuButton = document.getElementById("menu-button");
    const homeButton = document.getElementById("home-button");
    const contactButton = document.getElementById("contact-button");
    const contentDiv = document.getElementById("content");

    menuButton.addEventListener("click", () =>{
        contentDiv.innerHTML = " ";
        menuPage();
        setupButtonListeners();
    })

    homeButton.addEventListener("click", () =>{
        contentDiv.innerHTML = " ";
        homePage();
        setupButtonListeners();
    })

    contactButton.addEventListener("click", () =>{
        contentDiv.innerHTML = " ";
        contactPage();
        setupButtonListeners();
    })

}
