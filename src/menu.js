import './styles.css';

function addDish(name, price, description, parent) {
    var divDish = document.createElement("div");
    divDish.className = "dish";
    var nameDiv = document.createElement("div");
    nameDiv.textContent = name;
    nameDiv.className = "nameDish";
    
    var priceDiv = document.createElement("div");
    priceDiv.textContent = price  + " euros";
    priceDiv.className = "priceDish";

    var descriptionDiv = document.createElement("p");
    descriptionDiv.textContent = description;
    descriptionDiv.className = "descriptionDish";

    divDish.appendChild(nameDiv);
    divDish.appendChild(priceDiv);
    divDish.appendChild(descriptionDiv);

    parent.appendChild(divDish);
}

export function loadMenuPage() {
    const textPresentation = "Mets le menu ici Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend, velit ut fermentum egestas, magna orci iaculis purus, eget consectetur erat velit at metus. Phasellus mollis non ante eget viverra. Aenean condimentum nunc vitae ipsum fermentum, ac dictum leo sagittis. Praesent tempor vulputate dolor, venenatis efficitur ligula efficitur sit amet. "

    var contentDiv = document.getElementById("content");

    const leftDiv = document.createElement("div");
    leftDiv.id = "left";
    contentDiv.appendChild(leftDiv);
    
    // Pour les entrées
    const entreeHeader = document.createElement("h1");
    entreeHeader.textContent = "Entrée";
    
    const entree = document.createElement("div");
    entree.className = "dishHeader";
    entree.appendChild(entreeHeader);

    addDish("Raviolis vapeur aux crevettes (Har Gow)", 6, "De délicats raviolis translucides farcis de crevettes fraîches, cuits à la vapeur pour conserver leur texture tendre et leur saveur subtile.",entree);

    addDish("Raviolis au porc et ciboule (Siu Mai)", 5.5, "Des bouchées savoureuses à base de porc finement haché et de ciboule, enveloppées dans une pâte fine et légèrement parfumée.",entree);

    addDish("Salade de concombre mariné", 4.5, "Une salade croquante et rafraîchissante de concombre mariné dans une sauce légère au sésame et vinaigre, avec une touche d’ail.",entree);

    // Pour les plats principaux
    const platPrincipalHeader = document.createElement("h1");
    platPrincipalHeader.textContent = "Plat principal";

    const platPrincipal = document.createElement("div");
    platPrincipal.className = "dishHeader";
    platPrincipal.appendChild(platPrincipalHeader);

    addDish("Canard laqué avec riz vapeur", 16, "Des tranches juteuses de canard à la peau croustillante, nappées d’une sauce légèrement sucrée, servies avec un riz vapeur parfumé.", platPrincipal);
    addDish("Nouilles sautées au bœuf", 13, "Nouilles sautées au wok avec des lamelles de bœuf mariné, des légumes croquants et une sauce maison légèrement épicée.", platPrincipal);
    addDish("Dim Sum assortis (8 pièces)", 12, "Un assortiment de dim sum comprenant raviolis crevettes, porc, légumes et autres saveurs traditionnelles, pour une expérience authentique.", platPrincipal);


    const dessertHeader = document.createElement("h1");
    dessertHeader.textContent = "Dessert";

    const dessert = document.createElement("div");
    dessert.className = "dishHeader";
    dessert.appendChild(dessertHeader);

    addDish("Perles de coco vapeur", 5, "Des boules moelleuses et sucrées à base de farine de riz, fourrées avec une pâte onctueuse de sésame noir.", dessert);
    addDish("Flan au thé matcha", 5.5, "Un flan délicat et crémeux infusé au thé matcha, offrant un parfait équilibre entre douceur et légère amertume.", dessert);
    addDish("Salade de fruits exotiques", 4.5, "Un mélange frais et léger de mangue, litchi, et ananas, agrémenté   d’un filet de jus de citron vert.", dessert);


    const mainDiv = document.createElement("div");
    mainDiv.id = "main"
    mainDiv.appendChild(entree);
    mainDiv.appendChild(platPrincipal);
    mainDiv.appendChild(dessert);

    contentDiv.appendChild(mainDiv);
    
    const rightDiv = document.createElement("div");
    rightDiv.id = "right";
    contentDiv.appendChild(rightDiv);    
}
