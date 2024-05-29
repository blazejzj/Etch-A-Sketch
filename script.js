// document.addEventListener("DOMContentLoaded", () => {

//     function createTemplate(amount) {
//         const template = document.getElementById("sketch");
//         const pixelSize = 560 / amount;

//         for(let i = 0; i < amount; i++) {
//             // Create pixel and add to class
//             const rowDiv = document.createElement("div");
//             rowDiv.classList.add("row")
//             rowDiv.style.height = `${pixelSize}px`;

//             for(let j = 0; j < amount; j++) {
//                 const pixelDiv = document.createElement("div");
//                 pixelDiv.classList.add("pixelStyle");
//                 pixelDiv.style.width = `${pixelSize}px`;
//                 pixelDiv.style.height = `${pixelSize}px`;
//                 rowDiv.appendChild(pixelDiv);
//                 pixelDiv.addEventListener("mouseover", applyColor);
//             }
//             template.appendChild(rowDiv);
//         }
//     }

//     function getRandomColor() {
//         const letters = "123456789ABCDEF";
//         let color = "#";
//         for(let i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     }

//     function applyColor(pixel) {
//         let color = getRandomColor();
//         pixel.target.style.backgroundColor = color;
//     }
    

//     // get user input and validate
//     let userInput = Number(prompt("How many pixels * pixels would you like for you template? (max 100)"));

//     if(isNaN(userInput) || userInput > 100) {
//         createTemplate(16);
//     } else {
//         createTemplate(userInput);
//     }


// });



