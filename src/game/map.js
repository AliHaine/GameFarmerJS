class Map {
    constructor() {
        map = this;

        this.map = document.createElement("div");
        this.map.setAttribute("id", "map");
        document.body.prepend(this.map);

        let result = getPercent(screen.width, mapWidth);
        this.map.style.width = result - (result % globalSize) + "px";
        result = getPercent(screen.height, mapHeight);
        this.map.style.height = result - (result % globalSize) + "px";

        this.squaresPerRow = Math.floor(this.map.clientWidth / globalSize);
        this.numRows = Math.floor(this.map.clientHeight / globalSize);
        this.hoveredSquare = null;

        this.mapGenerator();
    }

    addSquare(square) {
        this.map.appendChild(square);
    }

    mapGenerator() {
        const start = performance.now();
        const naturalSpawnableElement = [];
        for (const elementName in ELEMENT) {
            const element = ELEMENT[elementName];
            if (element.naturalSpawnChance === undefined)
                continue;
            naturalSpawnableElement.push(element);
        }
        for (let x = 0; x < this.numRows; x++) {
            for (let y = 0; y < this.squaresPerRow; y++) {
                const square = document.createElement('div');
                square.classList.add('square');
                if (this.#isCorner(x, y))
                    square.appendChild(IMG.GRASS_CORNER.cloneNode(true))
                else if (this.isBorderOfMap(x, y))
                    square.appendChild(IMG.GRASS_SIDE.cloneNode(true));
                else {
                    square.appendChild(IMG.GRASS.cloneNode(true));
                    if (Math.random() * 100 <= globalNaturalGeneration) {
                        this.#generateElement(square, [...naturalSpawnableElement]);
                    }
                }
                const img = square.querySelector('img');
                img.style.transform = this.#rotateCalculation(x, y);
                this.addSquare(square);
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
            let block = naturalSpawnableElement[Math.floor(Math.random() * naturalSpawnableElement.length)];
            let randValue = Math.floor(Math.random() * 100);
            if (randValue <= block.naturalSpawnChance) {
                block.setElementToSquare(square);
                break;
            }
        }
    }

    #isCorner(x, y) {
        return x === 0 && y === 0 || x === 0 && y === (this.squaresPerRow - 1) ||
            y === 0 && x === (this.numRows - 1) || x === (this.numRows - 1) && y === (this.squaresPerRow - 1);
    }

    isBorderOfMap(x, y) {
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

    getSquareIndex(x, y) {
        return y * map.squaresPerRow + x;
    }

    getSquare(x, y) {
        return document.querySelectorAll('.square')[this.getSquareIndex(x, y)];
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

    /**
     * Returns the grid coordinates (x, y) of the mouse pointer relative to the game map.
     *
     * @returns {int[2]} An array containing the x and y coordinates.
     */
    getMapMouseXY() {
        const mapRect = map.map.getBoundingClientRect();
        const x = Math.floor((player.getMouseX() - mapRect.left) / globalSize);
        const y = Math.floor((player.getMouseY() - mapRect.top) / globalSize);
        return [x, y];
    }
}