function newImage(imagePath, id, z, className = "none") {
    const img = new Image();

    img.onerror = function() {
        throw new Error(`Failed to load image ` + imagePath);
    };

    img.src = imagePath;
    img.setAttribute('id', id);
    img.setAttribute('draggable', "false");
    if (className !== "none")
        img.classList.add(className);
    img.style.zIndex = z;
    return img;
}

/**
 * Load an array of images, inserting a number before the file extension in the image path.
 * For example, if imagePath is '../example/path.png', and number is 3,
 * the resulting paths will be '../example/path0.png', '../example/path1.png', '../example/path2.png'.
 *
 * @param {string} imagePath - The base image path.
 * @param {string} id - The id to set as an HTML attribute to the images.
 * @param {int} number - The number of images to load.
 * @returns {HTMLImageElement[]} An array of HTMLImageElement objects representing the loaded images.
 */
function newImages(imagePath, id, number) {
    let imgs = [];
    let indexOfPoint = imagePath.lastIndexOf('.');

    for (let i = 0; i < number; i++) {
        const img = new Image();
        img.src = insertToStr(imagePath, i, indexOfPoint);
        img.setAttribute('id', id);
        imgs.push(img);
    }
    return imgs;
}

function getPercent(value, percent) {
    return (value * percent) / 100;
}

function insertToStr(strTarget, strToInsert, index) {
    return strTarget.slice(0, index) + strToInsert + strTarget.slice(index);
}

/**
 * Return the number of the image from the given path.
 * For example, "assets/example/test1.png", it will return 1.
 *
 * @param {string} src - The image path.
 * @returns {int} - The number of the image
 */
function getImageNumber(src) {
    return parseInt(src.match(/\d/)[0])
}


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
function displayRightClick(text, image, x, y) {
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

    displayRightClickAnimation(div);
}

function displayRightClickAnimation(element) {
    let loopCount = 0;

    const intervalId = setInterval(function() {
        element.style.top = `${parseInt(element.style.top || 0) - 1}px`;
        if (loopCount++ > 50) {
            clearInterval(intervalId);
            element.remove();
        }
    }, 10);
}

function displayMessageToAlertBox(messageToDisplay) {
    const htmlElement = document.getElementById("alertbox");
    htmlElement.textContent = messageToDisplay;
    htmlElement.style.display = "block";
    //todo
    setTimeout( () => {
        if (htmlElement.style.display === "block")
            htmlElement.style.display = "none";
    }, 3000);
}