const globalSize = 32;
const globalNaturalGeneration = 30;
const globalGrowthSpeed = 1;
const mapHeight = 75;
const mapWidth = 95;

const BLOCK = {
	GRASS: new ElementGround([IMG.GRASS], new BlockActionPlowe()),
	GRASS_SIDE: new ElementGround([IMG.GRASS_SIDE]),
	GRASS_CORNER: new ElementGround([IMG.GRASS_CORNER]),
	GRASS_FARM: new ElementGround([IMG.GRASS_FARM], new BlockActionUnplowe()),

	PLANT0: new ElementStatic([IMG.PLANT0]),
	ROCK0: new ElementStatic([IMG.ROCK0]),
	FLOWER0: new ElementStatic([IMG.FLOWER0]),
	FLOWER1: new ElementStatic([IMG.FLOWER1]),
	FLOWER2: new ElementStatic([IMG.FLOWER2]),
	TRUNK0: new ElementStatic([IMG.TRUNK0]),
	TREE0: new ElementStatic([IMG.TREE0], new BlockActionPrune()),
	TREE1: new ElementStatic([IMG.TREE1], new BlockActionPrune()),

	FENCE_WOOD_CORNER: new ElementStatic([IMG.FENCE_WOOD_CORNER]),

	MELON: new ElementCrop(IMG.MELON, "Melon", 5000),
	WHEAT: new ElementCrop(IMG.WHEAT, "Wheat", 15000),
	SUGARCANE: new ElementCrop(IMG.SUGARCANE, "Sugarcane", 13000),
	EGGPLANT: new ElementCrop(IMG.EGGPLANT, "Eggplant", 3000),
	CHILI: new ElementCrop(IMG.CHILI, "Chili", 7000)
}


//Block specification

BLOCK.PLANT0.setNaturalSpawnChance(75);
BLOCK.ROCK0.setNaturalSpawnChance(30);
BLOCK.FLOWER0.setNaturalSpawnChance(2).setLootable(RESOURCE.SEED, 1);
BLOCK.FLOWER1.setNaturalSpawnChance(2).setLootable(RESOURCE.SEED, 1);
BLOCK.FLOWER2.setNaturalSpawnChance(2).setLootable(RESOURCE.SEED, 1);
BLOCK.TRUNK0.setNaturalSpawnChance(10).setLootable(RESOURCE.WOOD, 2);
BLOCK.TREE0.setNaturalSpawnChance(20).setLootable(RESOURCE.WOOD, 7).setBlockChild(BLOCK.TRUNK0);
BLOCK.TREE1.setNaturalSpawnChance(20).setLootable(RESOURCE.WOOD, 7).setBlockChild(BLOCK.TRUNK0);
BLOCK.FENCE_WOOD_CORNER.setLootable(RESOURCE.WOOD, 1);
BLOCK.MELON.setLootable(RESOURCE.MELON, 1).build();
BLOCK.WHEAT.setLootable(RESOURCE.WHEAT, 1).build();
BLOCK.SUGARCANE.setLootable(RESOURCE.SUGARCANE, 1).build();
BLOCK.EGGPLANT.setLootable(RESOURCE.EGGPLANT, 1).build();
BLOCK.CHILI.setLootable(RESOURCE.CHILI, 1).build();