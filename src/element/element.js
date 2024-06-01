import Map from './../game/map.js';
import Player from "../game/player";
import ElementGround from "./elements/element_ground";
import {ELEMENT, RESOURCE} from "../game_manager/game_setting";

export class Element {
    static timeToGrow = document.getElementById("inputTimeToGrow").value;
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
        throw new Error("This function need to be implemented");
    }

    setElementConditions(square) {
        return !(Map.map.isSquareContainMaxElement(square) || (!Player.player.getInfiniteResources() && Player.player.getHandElementQuantity() <= 0));
    }

    setHtmlDisplayCategory(htmlDisplayCategory) {
        this.htmlDisplayCategory = htmlDisplayCategory;
        let div = document.createElement('div');
		div.appendChild(this.image);

		let spanName = `<span class="txt">${this.displayName}</span>`;
        let spanNumber = `<span class="txtNumber">0</span>`;

		div.insertAdjacentHTML('beforeend', spanName);
        div.insertAdjacentHTML('beforeend', spanNumber);
		this.htmlDisplayCategory.appendChild(div);
        return this;
    }

    setBlockChild(blockChild) {
        this.blockChild = blockChild;
        return this;
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

export function loadElements() {
    new ElementGround(IMG.GRASS, new ActionPlowe());
    new ElementGround(IMG.GRASS_SIDE);
    new ElementGround(IMG.GRASS_CORNER);
    new ElementGround(IMG.GRASS_FARM, new ActionUnplowe());

    (new ElementDefault(IMG.PLANT0)).setNaturalSpawnChance(75).setLootable(RESOURCE.LEAF);
    (new ElementDefault(IMG.ROCK0)).setNaturalSpawnChance(30).setLootable(RESOURCE.ROCK, 3);
    (new ElementDefault(IMG.FLOWER0)).setNaturalSpawnChance(2).setLootable(RESOURCE.SEED);
    (new ElementDefault(IMG.FLOWER1)).setNaturalSpawnChance(2).setLootable(RESOURCE.SEED);
    (new ElementDefault(IMG.FLOWER2)).setNaturalSpawnChance(2).setLootable(RESOURCE.SEED);
    (new ElementDefault(IMG.TRUNK0)).setNaturalSpawnChance(10).setLootable(RESOURCE.WOOD, 2);
    (new ElementDefault(IMG.TREE0, new ActionPrune())).setNaturalSpawnChance(20).setLootable(RESOURCE.WOOD, 7).setBlockChild(ELEMENT.TRUNK0);
    (new ElementDefault(IMG.TREE1, new ActionPrune())).setNaturalSpawnChance(20).setLootable(RESOURCE.WOOD, 7).setBlockChild(ELEMENT.TRUNK0);
    (new ElementDefault(IMG.FENCE_WOOD_0)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_1)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_2)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_3)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_4)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_5)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_6)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_7)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_8)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);

    new ElementCrop(IMG.MELON, "Melon", 1000, RESOURCE.FRUIT);
    new ElementCrop(IMG.WHEAT, "Wheat", 1500, RESOURCE.FRUIT, 5);
    new ElementCrop(IMG.SUGARCANE, "Sugarcane", 1300, RESOURCE.FRUIT, 3);
    new ElementCrop(IMG.EGGPLANT, "Eggplant", 300, RESOURCE.FRUIT);
    new ElementCrop(IMG.CHILI, "Chili", 700, RESOURCE.FRUIT, 2);
}