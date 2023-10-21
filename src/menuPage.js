export default function menuPage(){
    const contentDiv = document.getElementById("content");

    const homeBtn = document.createElement("button");
    homeBtn.id = "home-button"
    homeBtn.textContent = ("home");

    const menuBtn = document.createElement("button");
    menuBtn.id = "menu-button"
    menuBtn.textContent = ("menu");

    const contactBtn = document.createElement("button");
    contactBtn.id = "contact-button"
    contactBtn.textContent = ("contact");

    const headerDiv = document.createElement("div");
    headerDiv.id = "header";
    headerDiv.textContent = "Good Eats";
    headerDiv.append(homeBtn);
    headerDiv.append(menuBtn);
    headerDiv.append(contactBtn);

    const coverImage = document.createElement("img");
    coverImage.id = "cover-image";
    coverImage.src = '/images/menu-image.jpeg';

    const descriptionDiv = document.createElement("div");
    descriptionDiv.id = "description";
    descriptionDiv.textContent = "this da menu";

    const footerDiv = document.createElement("div");
    footerDiv.id = "footer";
    footerDiv.textContent = "Made by juiceman1014";

    

    contentDiv.appendChild(headerDiv);
    contentDiv.appendChild(coverImage);
    contentDiv.appendChild(descriptionDiv);
    contentDiv.appendChild(footerDiv);
}