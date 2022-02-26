const container = document.getElementById("container");

function makeGrid (rows, columns) {
    // remove existing button if played
    while (document.querySelector("button") !== null) {
        document.querySelector("#button").remove();
    }

    // creating the grid
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-columns", columns);
    container.style.width = "960px";
    container.style.overflow = "hidden";
 
    for (i=0; i<(rows*columns); i++) {
        let square = document.createElement("div");
        square.style.minHeight = "0";
        square.style.minWidth = "0";
        square.style.overflow = "hidden";
        // square.innerText = (i + 1);
        container.appendChild(square).className = "grid-item";

        square.addEventListener("mouseover", () => {
            if (square.style.backgroundColor == "") {
                let color = getRandomColor();
                square.style.backgroundColor = color;
                square.style.opacity = ".10";
                return square.style.backgroundColor;
            }

            if ((square.style.backgroundColor !== "") && (square.style.opacity <= "0.90")) {
                square.style.opacity = parseFloat(square.style.opacity) + .10;
                return square.style.backgroundColor;
            }


        })
    }

    createButton();
}

function createButton() {
    const button = document.querySelector("#button");
    const resetButton = document.createElement("resetButton");
    resetButton.textContent = "Reset Grid";
    resetButton.style.margin = "20px";
    resetButton.style.cursor = "pointer";

    button.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
        document.querySelectorAll(".grid-item").forEach(e => e.remove());
        let userGridInput = prompt("Enter the number of squares per side you want (Max. 100): ");
        if (userGridInput > 100) {
            alert ("Error. You specified a number greater than the maximum. ");
            return;
        }
        rows = userGridInput;
        columns = userGridInput;
        makeGrid(rows, columns);
    })
}

function getRandomColor() {
    let o = Math.round;
    let r = Math.random;
    let s = 255;
    return "rgb(" + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

makeGrid(16, 16);

