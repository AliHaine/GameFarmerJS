const globalSize = 32;
let globalNaturalGeneration;
let globalGrowthSpeed;
let mapHeight;
let mapWidth;

const RESOURCE = {
	FRUIT: new Resource("Fruit", IMG_ICON.FRUIT),
	SEED: new Resource("Seed", IMG_ICON.SEED),
	ROCK: new Resource("Rock", IMG_ICON.ROCK),
	WOOD: new Resource("Wood", IMG_ICON.WOOD),
	LEAF: new Resource("Leaf", IMG_ICON.LEAF)
}

const BLOCK = {}

BLOCK.GRASS = new ElementGround([IMG.GRASS], new ActionPlowe());
BLOCK.GRASS_SIDE = new ElementGround([IMG.GRASS_SIDE]);
BLOCK.GRASS_CORNER = new ElementGround([IMG.GRASS_CORNER]);
BLOCK.GRASS_FARM = new ElementGround([IMG.GRASS_FARM], new ActionUnplowe());

BLOCK.PLANT0 = (new ElementDefault([IMG.PLANT0])).setNaturalSpawnChance(75).setLootable(RESOURCE.LEAF);
BLOCK.ROCK0 = (new ElementDefault([IMG.ROCK0])).setNaturalSpawnChance(30).setLootable(RESOURCE.ROCK, 3);
BLOCK.FLOWER0 = (new ElementDefault([IMG.FLOWER0])).setNaturalSpawnChance(2).setLootable(RESOURCE.SEED);
BLOCK.FLOWER1 = (new ElementDefault([IMG.FLOWER1])).setNaturalSpawnChance(2).setLootable(RESOURCE.SEED);
BLOCK.FLOWER2 = (new ElementDefault([IMG.FLOWER2])).setNaturalSpawnChance(2).setLootable(RESOURCE.SEED);
BLOCK.TRUNK0 = (new ElementDefault([IMG.TRUNK0])).setNaturalSpawnChance(10).setLootable(RESOURCE.WOOD, 2);
BLOCK.TREE0 = (new ElementDefault([IMG.TREE0], new ActionPrune())).setNaturalSpawnChance(20).setLootable(RESOURCE.WOOD, 7).setBlockChild(BLOCK.TRUNK0);
BLOCK.TREE1 = (new ElementDefault([IMG.TREE1], new ActionPrune())).setNaturalSpawnChance(20).setLootable(RESOURCE.WOOD, 7).setBlockChild(BLOCK.TRUNK0);
BLOCK.FENCE_WOOD_0 = (new ElementDefault([IMG.FENCE_WOOD_0])).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
BLOCK.FENCE_WOOD_1 = (new ElementDefault([IMG.FENCE_WOOD_1])).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
BLOCK.FENCE_WOOD_2 = (new ElementDefault([IMG.FENCE_WOOD_2])).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
BLOCK.FENCE_WOOD_3 = (new ElementDefault([IMG.FENCE_WOOD_3])).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
BLOCK.FENCE_WOOD_4 = (new ElementDefault([IMG.FENCE_WOOD_4])).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
BLOCK.FENCE_WOOD_5 = (new ElementDefault([IMG.FENCE_WOOD_5])).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
BLOCK.FENCE_WOOD_6 = (new ElementDefault([IMG.FENCE_WOOD_6])).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
BLOCK.FENCE_WOOD_7 = (new ElementDefault([IMG.FENCE_WOOD_7])).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
BLOCK.FENCE_WOOD_8 = (new ElementDefault([IMG.FENCE_WOOD_8])).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);

BLOCK.MELON = new ElementCrop(IMG.MELON, "Melon", 1000, RESOURCE.FRUIT);
BLOCK.WHEAT = new ElementCrop(IMG.WHEAT, "Wheat", 1500, RESOURCE.FRUIT, 5);
BLOCK.SUGARCANE = new ElementCrop(IMG.SUGARCANE, "Sugarcane", 1300, RESOURCE.FRUIT, 3);
BLOCK.EGGPLANT = new ElementCrop(IMG.EGGPLANT, "Eggplant", 300, RESOURCE.FRUIT);
BLOCK.CHILI = new ElementCrop(IMG.CHILI, "Chili", 700, RESOURCE.FRUIT, 2);