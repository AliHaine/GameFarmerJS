import Map from "./../game/map.js";
import {addChildToToolBar} from "../view/bar.js";
import {displayMessageToAlertBox} from "../view/render.js";
import {infiniteResources} from "../game_manager/game_settings.js";
import Player from "../game/player.js";


export default class Element {
    static elements = [];

    constructor(image, elementAction) {
        if (this.constructor === Element)
            throw new Error("Abstract classes can't be instantiated.");
        this.image = image;
        this.elementAction = elementAction;
        Element.elements.push(this);
    }

    setNaturalSpawnChance(naturalSpawnChance) {
        this.naturalSpawnChance = naturalSpawnChance;
        return this;
    }

    setLootable(resource, resourceNumber = 1) {
        this.resource = resource;
        this.resourceNumber = resourceNumber;
        return this;
    }

    setDisplayName(displayName) {
        this.displayName = displayName;
        return this;
    }

    setElementToSquare(square) {
        if (Map.mapInstance.isSquareContainMaxElement(square))
            return displayMessageToAlertBox(ENG_LANG.SQUARE_FULL);
        if (!infiniteResources) {
            Player.player.decreaseHandElementQuantity();
            if (Player.player.getHandElementQuantity() <= 0)
                Player.player.removeHandElement();
        }
        this.performSetElementToSquare(square);
    }

    performSetElementToSquare(square) {
        throw new Error("This function need to be implemented");
    }

    setHtmlDisplayCategory(htmlDisplayCategory) {
        const div = document.createElement('div');
		div.appendChild(this.image);

		let spanName = `<span class="txt">${this.displayName}</span>`;
        let spanNumber = `<span class="txtNumber">0</span>`;
		div.insertAdjacentHTML('beforeend', spanName);
        if (!infiniteResources)
            div.insertAdjacentHTML('beforeend', spanNumber);
        addChildToToolBar(htmlDisplayCategory, div);
        this.elementHtmlDiv = div;
        return this;
    }

    setBlockChild(blockChild) {
        this.blockChild = blockChild;
        return this;
    }

    setPrice(sellPrice, buyPrice) {
        this.sellPrice = sellPrice;
        this.buyPrice = buyPrice;
        return this;
    }

    getSellPrice() {
        return this.sellPrice;
    }

    getBuyPrice() {
        return this.buyPrice;
    }

    haveEconomy() {
        return this.getBuyPrice() || this.getSellPrice();
    }

    getResource() {
        return this.resource;
    }

    getResourceNumber() {
        return this.resourceNumber;
    }

    getBlockChild() {
        return this.blockChild;
    }

    getImage() {
        return this.image;
    }

    getElementAction() {
        return this.elementAction;
    }

    getElementId() {
        return this.image.getAttribute("id");
    }

    getElementImageSrc() {
        return this.image.getAttribute("src");
    }

    static getElementFromId(id) {
       return Element.elements.find(element => element.getElementId().toUpperCase() === id.toUpperCase());
    }
}