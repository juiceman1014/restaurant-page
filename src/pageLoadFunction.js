export default function pageLoadFunction() {
    const contentDiv = document.getElementById("content");

    const headerDiv = document.createElement("div");
    headerDiv.id = "header";
    headerDiv.textContent = "Good Eats";

    const coverImage = document.createElement("img");
    coverImage.id = "cover-image";
    coverImage.src = '../images/cat-eating-funny.jpeg';

    const descriptionDiv = document.createElement("div");
    descriptionDiv.id = "description";
    descriptionDiv.textContent = "bro has good eats bro has good eats bro has good eats";

    const footerDiv = document.createElement("div");
    footerDiv.id = "footer";
    footerDiv.textContent = "Made by juiceman1014";

    contentDiv.appendChild(headerDiv);
    contentDiv.appendChild(coverImage);
    contentDiv.appendChild(descriptionDiv);
    contentDiv.appendChild(footerDiv);

}