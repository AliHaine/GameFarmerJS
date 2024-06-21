import Element from "../element/element.js";
import {getPercent} from "../utils.js"
import {addImgToSquare} from "../view/render.js";
import {globalSize, mapHeight, mapWidth, naturalGeneration} from "../game_manager/game_settings.js";

export default class Map {
    static map;
    static mapInstance;

    constructor() {
        Map.mapInstance = this;

        Map.map = document.createElement("div");
        Map.map.setAttribute("id", "map");
        document.body.prepend(Map.map);

        let result = getPercent(screen.width, mapWidth);
        Map.map.style.width = result - (result % globalSize) + "px";
        result = getPercent(screen.height, mapHeight);
        Map.map.style.height = result - (result % globalSize) + "px";

        this.squaresPerRow = Math.floor(Map.map.clientWidth / globalSize);
        this.numRows = Math.floor(Map.map.clientHeight / globalSize);

        this.#mapGenerator();
        return this;
    }

    #addSquare(square) {
        Map.map.appendChild(square);
    }

    #mapGenerator() {
        const start = performance.now();
        const naturalSpawnableElement = Element.elements.filter((elem) => elem.naturalSpawnChance);
        for (let x = 0; x < this.numRows; x++) {
            for (let y = 0; y < this.squaresPerRow; y++) {
                const square = document.createElement('div');
                square.classList.add('square');
                if (this.#isCorner(x, y))
                    addImgToSquare(square, Element.getElementFromId("ground_corner").getImage());
                else if (this.#isBorderOfMap(x, y))
                    addImgToSquare(square, Element.getElementFromId("ground_side").getImage());
                else {
                    addImgToSquare(square, Element.getElementFromId("ground").getImage());
                    if (Math.random() * 100 <= naturalGeneration) {
                        this.#generateElement(square, [...naturalSpawnableElement]);
                    }
                }
                const img = square.querySelector('img');
                img.style.transform = this.#rotateCalculation(x, y);
                this.#addSquare(square);
            }
        }
        console.log(`Time to load the map: ${performance.now() - start} ms`);
    }

    #generateElement(square, naturalSpawnableElement) {
        /*let randValue = Math.floor(Math.random() * 100);
        while (naturalSpawnableElement.length > 0) {
            const selector = Math.floor(Math.random() * naturalSpawnableElement.length);
            let block = naturalSpawnableElement[selector]
            if (randValue <= block.naturalSpawnChance) {
                block.setBlockToSquare(square)
                break;
            }
            naturalSpawnableElement.splice(selector, 1);
        }*/

        while (true) {
            let element = naturalSpawnableElement[Math.floor(Math.random() * naturalSpawnableElement.length)];
            let randValue = Math.floor(Math.random() * 100);
            if (randValue <= element.naturalSpawnChance) {
                element.setElementToSquare(square);
                break;
            }
        }
    }

    #isCorner(x, y) {
        return x === 0 && y === 0 || x === 0 && y === (this.squaresPerRow - 1) ||
            y === 0 && x === (this.numRows - 1) || x === (this.numRows - 1) && y === (this.squaresPerRow - 1);
    }

    #isBorderOfMap(x, y) {
        return x <= 0 || y <= 0 || x >= (this.numRows - 1) || y >= (this.squaresPerRow - 1);
    }

    #rotateCalculation(x, y) {
        if (x === 0 && y > 0)
            return "rotate(90deg)";
        else if (y === (this.squaresPerRow - 1))
            return "rotate(180deg)";
        else if (x === (this.numRows - 1))
            return "rotate(270deg)";
        return "rotate(0deg)";
    }

    getElementFromSquare(square) {
        const nodes = square.querySelectorAll('img');
        return Element.getElementFromId(nodes[nodes.length - 1].getAttribute('id'));
    }

    /**
     * Checks if the square contains the maximum number of element allowed.
     *
     * A square can contain only 2 Elements, so if the length returned by the
     * selectorAll is more than 1, it means the maximum Elements is reached in this square.
     *
     * @returns {boolean} True if the square is max, otherwise false.
     */
    isSquareContainMaxElement(square) {
        return square.querySelectorAll('img').length > 1;
    }

    tryToGetSquareFromGround(target) {
        return target.classList.contains("ground") ? target.parentElement : null;
    }
}