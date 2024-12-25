import './styles.css';

export function loadAboutPage() {
    const textPresentation = "mets le about ici Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend, velit ut fermentum egestas, magna orci iaculis purus, eget consectetur erat velit at metus. Phasellus mollis non ante eget viverra. Aenean condimentum nunc vitae ipsum fermentum, ac dictum leo sagittis. Praesent tempor vulputate dolor, venenatis efficitur ligula efficitur sit amet. "

    var contentDiv = document.getElementById("content");

    const leftDiv = document.createElement("div");
    leftDiv.id = "left";
    contentDiv.appendChild(leftDiv);
    
    
    
    const h1 = document.createElement("h1");
    h1.textContent = "About";
    
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
