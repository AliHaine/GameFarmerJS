const resourceBarElement = document.getElementById('ressourcebar').getElementsByTagName('ul')[0];

const SOUND = {
	DEFAULT_SOUND: new Audio('assets/sound/default_sound.mp3')
}

const TOOLBAR_CATEGORY = {
	CROP: document.getElementById('dropup-crop'),
	FENCE: document.getElementById('dropup-fence')
}

const IMG = {
	GRASS: newImage("assets/image/ground/grass.png", "ground", 0, "ground"),
	GRASS_SIDE: newImage("assets/image/ground/grass_side.png", "ground", 0, "ground"),
	GRASS_CORNER: newImage("assets/image/ground/grass_corner.png", "ground", 0, "ground"),
	GRASS_FARM: newImage("assets/image/ground/grass_farm.png", "ground_farm", 0, "ground"),
	TREE0: newImage("assets/image/static/tree0.png", "tree0", 2),
	TREE1: newImage("assets/image/static/tree1.png", "tree1", 2),
	PLANT0: newImage("assets/image/static/plant0.png", "plant0", 1),
	ROCK0: newImage("assets/image/static/rock0.png", "rock0", 1),
	FLOWER0: newImage("assets/image/static/flower0.png", "flower0", 1),
	FLOWER1: newImage("assets/image/static/flower1.png", "flower1", 1),
	FLOWER2: newImage("assets/image/static/flower2.png", "flower2", 1),
	TRUNK0: newImage("assets/image/static/trunk0.png", "trunk0", 1),
	FENCE_WOOD_0: newImage("assets/image/fence/fence_wood_0.png", "fence_wood_0", 1),
	FENCE_WOOD_1: newImage("assets/image/fence/fence_wood_1.png", "fence_wood_1", 1),
	FENCE_WOOD_2: newImage("assets/image/fence/fence_wood_2.png", "fence_wood_2", 1),
	FENCE_WOOD_3: newImage("assets/image/fence/fence_wood_3.png", "fence_wood_3", 1),
	FENCE_WOOD_4: newImage("assets/image/fence/fence_wood_4.png", "fence_wood_4", 1),
	FENCE_WOOD_5: newImage("assets/image/fence/fence_wood_5.png", "fence_wood_5", 1),
	FENCE_WOOD_6: newImage("assets/image/fence/fence_wood_6.png", "fence_wood_6", 1),
	FENCE_WOOD_7: newImage("assets/image/fence/fence_wood_7.png", "fence_wood_7", 1),
	FENCE_WOOD_8: newImage("assets/image/fence/fence_wood_8.png", "fence_wood_8", 1),

	MELON: newImages("assets/image/crops/melon.png", "melon", 1, 7),
	WHEAT: newImages("assets/image/crops/wheat.png", "wheat", 1, 7),
	SUGARCANE: newImages("assets/image/crops/sugarcane.png", "sugarcane", 1, 7),
	EGGPLANT: newImages("assets/image/crops/eggplant.png", "eggplant", 1, 7),
	CHILI: newImages("assets/image/crops/chili.png", "chili", 1, 7)
}

const IMG_ICON = {
	SEED: newImage("assets/image/icon/seed_icon.png", "seed0", 0),
	MELON: newImage("assets/image/icon/melon_icon.png", "melon", 0),
	WHEAT: newImage("assets/image/icon/wheat_icon.png", "wheat", 0),
	SUGARCANE: newImage("assets/image/icon/sugarcane_icon.png", "sugarcane", 0),
	EGGPLANT: newImage("assets/image/icon/eggplant_icon.png", "eggplant", 0),
	CHILI: newImage("assets/image/icon/chili_icon.png", "chili", 0),

	WOOD: newImage("assets/image/icon/wood_icon.png", "wood", 0)
}

const RESOURCE = {
	SEED: new Resource("Seed", IMG_ICON.SEED),
	MELON: new Resource("Melon", IMG_ICON.MELON),
	WHEAT: new Resource("Wheat", IMG_ICON.WHEAT),
	SUGARCANE: new Resource("Sugarcane", IMG_ICON.SUGARCANE),
	EGGPLANT: new Resource("Eggplant", IMG_ICON.EGGPLANT),
	CHILI: new Resource("Chili", IMG_ICON.CHILI),
	WOOD: new Resource("Wood", IMG_ICON.WOOD)
}