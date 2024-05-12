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
	//side and corner are not marked as "ground" class even though they "are" ground, because they are not interactive
	GRASS_SIDE: newImage("assets/image/ground/grass_side.png", "ground_side", 0),
	GRASS_CORNER: newImage("assets/image/ground/grass_corner.png", "ground_corner", 0),
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

	MELON: newImage("assets/image/crops/melon6.png", "melon", 1),
	WHEAT: newImage("assets/image/crops/wheat6.png", "wheat", 1),
	SUGARCANE: newImage("assets/image/crops/sugarcane6.png", "sugarcane", 1),
	EGGPLANT: newImage("assets/image/crops/eggplant6.png", "eggplant", 1),
	CHILI: newImage("assets/image/crops/chili6.png", "chili", 1)
}

const IMG_ICON = {
	FRUIT: newImage("assets/image/icon/fruit_icon.png", "fruit", 0),
	SEED: newImage("assets/image/icon/seed_icon.png", "seed0", 0),
	WOOD: newImage("assets/image/icon/wood_icon.png", "wood", 0),
	ROCK: newImage("assets/image/icon/rock_icon.png", "rock", 0),
	LEAF: newImage("assets/image/icon/leaf_icon.png", "leaf", 0)
}