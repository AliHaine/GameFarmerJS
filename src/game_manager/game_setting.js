const globalSize = 32;
let globalNaturalGeneration;
let globalGrowthSpeed;
let mapHeight;
let mapWidth;
let infiniteResources;

const MENU = {
	SETTINGS: new Menu(document.getElementsByClassName("menu")[1]),
	SHOP: new Menu(document.getElementsByClassName("menu")[2]),
}

const BUTTON = {
	APPLY: new ButtonApply(MENU.SETTINGS.getHtmlButton(0).textContent),
	BUY: new ButtonBuy(MENU.SHOP.getHtmlButton(0).textContent),
	OPENER_SETTINGS: new ButtonOpener(document.getElementsByClassName("left-item")[0].textContent, MENU.SETTINGS),
	OPENER_SHOP: new ButtonOpener(document.getElementsByClassName("right-item")[0].textContent, MENU.SHOP)
}

const RESOURCE = {
	FRUIT: new Resource("Fruit", IMG_ICON.FRUIT),
	SEED: new Resource("Seed", IMG_ICON.SEED),
	ROCK: new Resource("Rock", IMG_ICON.ROCK),
	WOOD: new Resource("Wood", IMG_ICON.WOOD),
	LEAF: new Resource("Leaf", IMG_ICON.LEAF)
}

const ELEMENT = {}

ELEMENT.GRASS = new ElementGround(IMG.GRASS, new ActionPlowe());
ELEMENT.GRASS_SIDE = new ElementGround(IMG.GRASS_SIDE);
ELEMENT.GRASS_CORNER = new ElementGround(IMG.GRASS_CORNER);
ELEMENT.GRASS_FARM = new ElementGround(IMG.GRASS_FARM, new ActionUnplowe());

ELEMENT.PLANT0 = (new ElementDefault(IMG.PLANT0)).setNaturalSpawnChance(75).setLootable(RESOURCE.LEAF);
ELEMENT.ROCK0 = (new ElementDefault(IMG.ROCK0)).setNaturalSpawnChance(30).setLootable(RESOURCE.ROCK, 3);
ELEMENT.FLOWER0 = (new ElementDefault(IMG.FLOWER0)).setNaturalSpawnChance(2).setLootable(RESOURCE.SEED);
ELEMENT.FLOWER1 = (new ElementDefault(IMG.FLOWER1)).setNaturalSpawnChance(2).setLootable(RESOURCE.SEED);
ELEMENT.FLOWER2 = (new ElementDefault(IMG.FLOWER2)).setNaturalSpawnChance(2).setLootable(RESOURCE.SEED);
ELEMENT.TRUNK0 = (new ElementDefault(IMG.TRUNK0)).setNaturalSpawnChance(10).setLootable(RESOURCE.WOOD, 2);
ELEMENT.TREE0 = (new ElementDefault(IMG.TREE0, new ActionPrune())).setNaturalSpawnChance(20).setLootable(RESOURCE.WOOD, 7).setBlockChild(ELEMENT.TRUNK0);
ELEMENT.TREE1 = (new ElementDefault(IMG.TREE1, new ActionPrune())).setNaturalSpawnChance(20).setLootable(RESOURCE.WOOD, 7).setBlockChild(ELEMENT.TRUNK0);
ELEMENT.FENCE_WOOD_0 = (new ElementDefault(IMG.FENCE_WOOD_0)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
ELEMENT.FENCE_WOOD_1 = (new ElementDefault(IMG.FENCE_WOOD_1)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
ELEMENT.FENCE_WOOD_2 = (new ElementDefault(IMG.FENCE_WOOD_2)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
ELEMENT.FENCE_WOOD_3 = (new ElementDefault(IMG.FENCE_WOOD_3)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
ELEMENT.FENCE_WOOD_4 = (new ElementDefault(IMG.FENCE_WOOD_4)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
ELEMENT.FENCE_WOOD_5 = (new ElementDefault(IMG.FENCE_WOOD_5)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
ELEMENT.FENCE_WOOD_6 = (new ElementDefault(IMG.FENCE_WOOD_6)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
ELEMENT.FENCE_WOOD_7 = (new ElementDefault(IMG.FENCE_WOOD_7)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
ELEMENT.FENCE_WOOD_8 = (new ElementDefault(IMG.FENCE_WOOD_8)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);

ELEMENT.MELON = new ElementCrop(IMG.MELON, "Melon", 1000, RESOURCE.FRUIT);
ELEMENT.WHEAT = new ElementCrop(IMG.WHEAT, "Wheat", 1500, RESOURCE.FRUIT, 5);
ELEMENT.SUGARCANE = new ElementCrop(IMG.SUGARCANE, "Sugarcane", 1300, RESOURCE.FRUIT, 3);
ELEMENT.EGGPLANT = new ElementCrop(IMG.EGGPLANT, "Eggplant", 300, RESOURCE.FRUIT);
ELEMENT.CHILI = new ElementCrop(IMG.CHILI, "Chili", 700, RESOURCE.FRUIT, 2);