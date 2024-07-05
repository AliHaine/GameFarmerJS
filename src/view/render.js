/**
 * Display text and image at the defined position on right-click event.
 *
 * Create a new div with the provided text and image,
 * positioned at the specified x and y coordinates.
 *
 * The ID of the created is formed by the calculation x + y of the coordinates.
 *
 * @param {string} text - The text to display.
 * @param {HTMLImageElement} image - The image to display.
 * @param {int} x - The position x of the elements
 * @param {int} y - The position y of the elements
 */
export function displayRightClick(text, image, x, y) {
    const div = document.createElement("div")
    div.setAttribute("id", (x + y).toString());
    div.appendChild(image.cloneNode(true));
    let spanHTML = `<span class="txtHarvest"> ${text}</span>`;

    div.insertAdjacentHTML('beforeend', spanHTML);
    div.style.position = "absolute";
    div.style.left = x + "px";
    div.style.top = y + "px";
    div.style.display = "block";

    document.body.appendChild(div);

    div.classList.add("resourceCollectedAnimation");
}

export function displayMessageToAlertBox(messageToDisplay) {
    const htmlElement = document.getElementById("alertbox");
    htmlElement.textContent = messageToDisplay;
    htmlElement.style.display = "block";
    //todo
    setTimeout( () => {
        if (htmlElement.style.display === "block")
            htmlElement.style.display = "none";
    }, 3000);
}

export function addImgToSquare(square, elementImg) {
    square.appendChild(elementImg.cloneNode(true));
}

export function replaceGroundImg(square, newGroundImg) {
    square.removeChild(square.querySelector('.ground'));
    square.appendChild(newGroundImg.cloneNode(true));
}

export function replaceElementImg(square, newElementImg) {
    square.removeChild(square.querySelectorAll('img')[1]);
    square.appendChild(newElementImg.cloneNode(true));
}

export function removeElementImg(square) {
    square.removeChild(square.querySelectorAll('img')[1]);
}