document.addEventListener("DOMContentLoaded", () => {

    let coloringMode = "random";
    const clearBtn = document.getElementById("clearTemplate");
    const colorBtn = document.getElementById("colorMode");
    const adjustBtn = document.getElementById("adjustSize");
    const sliderValueDisplay = document.getElementById('sliderValue');
    
    function createTemplate(amount) {
        const template = document.getElementById("sketch");
        const pixelSize = 560 / amount;
        template.innerHTML = ""; // clear content

        for(let i = 0; i < amount; i++) {
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("row")
            rowDiv.style.height = `${pixelSize}px`;

            for(let j = 0; j < amount; j++) {
                const pixelDiv = document.createElement("div");
                pixelDiv.classList.add("pixelStyle");
                pixelDiv.style.cssText = `width: ${pixelSize}px; height: ${pixelSize}px;`
                pixelDiv.addEventListener("mouseover", applyColor); // apply hover coloring

                // add to row
                rowDiv.appendChild(pixelDiv);

            }
            // add to template div
            template.appendChild(rowDiv);
        }
    }

    function getRandomColor() {
        const letters = "123456789ABCDEF";
        let color = "#";
        for(let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function applyColor(pixel) {
        if(coloringMode === "random") {
            let color = getRandomColor();
            pixel.target.style.backgroundColor = color;
            pixel.target.dataset.darkness = 0;
        }
        else if (coloringMode === "shading") {
            let darkness = parseInt(pixel.target.dataset.darkness) || 0;
            darkness = Math.min(darkness + 10, 100);
            pixel.target.dataset.darkness = darkness;
            pixel.target.style.backgroundColor = `rgba(0, 0, 0, ${darkness / 100})`;
        }
    }

    function adjustTemplate(size) {
        // Remove all child elements
        resetTemplate();
        createTemplate(size);
    }

    function resetTemplate() {
        const template = document.getElementById("sketch");
        template.innerHTML = "";
    }

    function clearTemplate() {
        var pixels = document.getElementsByClassName("pixelStyle");
        for(let i = 0; i < pixels.length; i++) {
            pixels[i].style.backgroundColor = "white";
        }
    }

    function toggleColoringMode() {
        if(coloringMode === "random") {
            coloringMode = "shading";
            document.getElementById("colorMode").textContent = "RGB";
        }
        else if (coloringMode === "shading") {
            coloringMode = "random";
            document.getElementById("colorMode").textContent = "SHADING";
        }
    }
    
    // Create initial template
    createTemplate(16);

    // button functionalities
    clearBtn.addEventListener("click", clearTemplate);
    colorBtn.addEventListener("click", toggleColoringMode);
    adjustBtn.addEventListener("input", () => adjustTemplate(adjustBtn.value));
    adjustBtn.addEventListener('input', function() {
        sliderValueDisplay.textContent = this.value;
    });


});



