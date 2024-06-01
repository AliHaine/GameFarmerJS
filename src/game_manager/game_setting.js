import Element from "./../element/element.js"
import ElementGround from "./../element/elements/element_ground.js"

export const MENU = {
	SETTINGS: new Menu(document.getElementById("menuSettings")),
	SHOP: new Menu(document.getElementById("menuShop")),
}

export const BUTTON = {
	APPLY: new ButtonApply(),
	BUY: new ButtonBuy(),
	SELL: new ButtonSell(),
	CLOSE: new ButtonClose(),
}

export const RESOURCE = {
	FRUIT: new Resource("Fruit", IMG_ICON.FRUIT),
	SEED: new Resource("Seed", IMG_ICON.SEED),
	ROCK: new Resource("Rock", IMG_ICON.ROCK),
	WOOD: new Resource("Wood", IMG_ICON.WOOD),
	LEAF: new Resource("Leaf", IMG_ICON.LEAF)
}

export const ELEMENT = {}