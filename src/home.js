import './styles.css';

export function loadHomePage() {
    const textPresentation = "Bienvenue chez Dim Sum Delights, un restaurant où l'art du dim sum rencontre la tradition asiatique. Situé au cœur de la ville, notre établissement vous invite à découvrir une expérience culinaire authentique avec une sélection de raviolis vapeur, buns moelleux et délicieuses bouchées farcies, soigneusement préparés à la vapeur pour préserver toutes les saveurs. Chaque plat est une invitation au voyage, alliant fraîcheur, finesse et respect des recettes traditionnelles. Venez savourer un moment inoubliable!"

    var contentDiv = document.getElementById("content");

    const leftDiv = document.createElement("div");
    leftDiv.id = "left";
    contentDiv.appendChild(leftDiv);
    
    
    
    const h1 = document.createElement("h1");
    h1.textContent = "Dim Sum Delights";
    
    const texteDiv = document.createElement("p");
    texteDiv.textContent = textPresentation;
    
    
    const mainDiv = document.createElement("div");
    mainDiv.id = "main"
    mainDiv.appendChild(h1);
    mainDiv.appendChild(texteDiv);
    contentDiv.appendChild(mainDiv);
    
    const rightDiv = document.createElement("div");
    rightDiv.id = "right";
    contentDiv.appendChild(rightDiv);    
}
