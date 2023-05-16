const containerEl = document.querySelector(".container");

for (let index = 0; index < 50; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColors()

colorContainerEls.forEach((colorContainerEl) => {
  colorContainerEl.addEventListener("click", () => {
    const colorCode = colorContainerEl.innerText.trim();
    navigator.clipboard.writeText(colorCode);
  });
});


function generateColors(){
    colorContainerEls.forEach((colorContainerEl)=>{
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#"+ newColorCode;
    });
}

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1); 
    }
    return colorCode;
}