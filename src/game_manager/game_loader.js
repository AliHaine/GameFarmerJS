import ElementGround from "../element/elements/element_ground.js";
import ActionPlowe from "../element/element_actions/action_plowe.js";
import ActionUnplowe from "../element/element_actions/action_unplowe.js";
import ElementDefault from "../element/elements/element_default.js";
import Resource from "../game/resource.js";
import ActionPrune from "../element/element_actions/action_prune.js";
import Element from "../element/element.js";
import ElementCrop from "../element/elements/element_crop.js";
import Button from "../view/button.js";
import ButtonApply from "../view/buttons/button_apply.js";
import ButtonBuy from "../view/buttons/button_buy.js";
import ButtonSell from "../view/buttons/button_sell.js";
import ButtonClose from "../view/buttons/button_close.js";
import ButtonMore from "../view/buttons/button_more.js";
import Menu from "../view/menu.js";
import * as Listeners from "./listeners.js";
import {IMG, IMG_ICON} from "./game_assets.js";
import MenuShop from "../view/menus/menu_shop.js";
import MenuShopMore from "../view/menus/menu_shop_more.js";
import Player from "../game/player.js";
import {TOOLBAR_CATEGORY} from "../view/bar.js";
import defineGameSettings from "./game_settings.js";
import Map from "../game/map.js";

export default function loadGame() {
    loadListeners();
    new Map();
}

export async function preLoadGame() {
    defineGameSettings();
    new Player();
    loadResources();
    loadElements();
    loadButtons();
    await loadMenus();
    document.getElementById("menus").addEventListener("click", function(event) {
        const button = Button.tryToGetButtonFromTarget(event.target);
        if (!button)
            return;
        button.executor(event.target);
    });
    document.getElementById("menus").addEventListener("input", function(event) {
        const value = event.target.value;
        const output = event.target.parentElement.querySelector("output");
        output.value = output.alt * value;
    })
}

function loadElements() {
    new ElementGround(IMG.GRASS, new ActionPlowe());
    new ElementGround(IMG.GRASS_SIDE);
    new ElementGround(IMG.GRASS_CORNER);
    new ElementGround(IMG.GRASS_FARM, new ActionUnplowe());

    (new ElementDefault(IMG.PLANT0)).setNaturalSpawnChance(75).setLootable(Resource.getResource("leaf"));
    (new ElementDefault(IMG.ROCK0)).setNaturalSpawnChance(30).setLootable(Resource.getResource("rock"), 3);
    (new ElementDefault(IMG.FLOWER0)).setNaturalSpawnChance(2).setLootable(Resource.getResource("seed0"));
    (new ElementDefault(IMG.FLOWER1)).setNaturalSpawnChance(2).setLootable(Resource.getResource("seed0"));
    (new ElementDefault(IMG.FLOWER2)).setNaturalSpawnChance(2).setLootable(Resource.getResource("seed0"));
    (new ElementDefault(IMG.TRUNK0)).setNaturalSpawnChance(10).setLootable(Resource.getResource("wood"), 2);
    (new ElementDefault(IMG.TREE0, new ActionPrune())).setNaturalSpawnChance(20).setLootable(Resource.getResource("wood"), 7).setBlockChild(Element.getElementFromId("trunk0"));
    (new ElementDefault(IMG.TREE1, new ActionPrune())).setNaturalSpawnChance(20).setLootable(Resource.getResource("wood"), 7).setBlockChild(Element.getElementFromId("trunk0"));
    (new ElementDefault(IMG.DOOR_WOOD_CLOSE)).setLootable(Resource.getResource("wood")).setDisplayName("Wood door").setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_1)).setLootable(Resource.getResource("wood")).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_2)).setLootable(Resource.getResource("wood")).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_3)).setLootable(Resource.getResource("wood")).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_4)).setLootable(Resource.getResource("wood")).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_5)).setLootable(Resource.getResource("wood")).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_6)).setLootable(Resource.getResource("wood")).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_7)).setLootable(Resource.getResource("wood")).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_8)).setLootable(Resource.getResource("wood")).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);

    (new ElementCrop(IMG.MELON, "Melon", 1000, Resource.getResource("fruit"))).setPrice(15, 500);
    (new ElementCrop(IMG.WHEAT, "Wheat", 1500, Resource.getResource("fruit"), 5)).setPrice(5, 5);
    (new ElementCrop(IMG.SUGARCANE, "Sugarcane", 1300, Resource.getResource("fruit"), 3)).setPrice(5, 5);
    (new ElementCrop(IMG.EGGPLANT, "Eggplant", 300, Resource.getResource("fruit"))).setPrice(5, 5);
    (new ElementCrop(IMG.CHILI, "Chili", 700, Resource.getResource("fruit"), 2)).setPrice(5, 5);
}

function loadButtons() {
    Button.buttons.push(new ButtonApply(), new ButtonBuy(), new ButtonSell(), new ButtonClose(), new ButtonMore())
}

async function loadMenus() {
    await new Menu("menu-settings.html").init();
    await new MenuShop("menu-shop.html").init();
    await new MenuShopMore("menu-shop-more.html").init();

}

function loadResources() {
    new Resource("Fruit", IMG_ICON.FRUIT).setPrice(5, 5);
    new Resource("Seed", IMG_ICON.SEED);
    new Resource("Rock", IMG_ICON.ROCK);
    new Resource("Wood", IMG_ICON.WOOD);
    new Resource("Leaf", IMG_ICON.LEAF);
}

function loadListeners() {
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    })

    document.addEventListener("animationend", (event) => {
        if (event.target.classList.contains('resourceCollectedAnimation'))
            return event.target.remove();
    });

    document.getElementsByClassName("left-item")[0].addEventListener("click", function() {
        Menu.getMenu("menu-settings.html").displayMenu();
    });

    document.getElementsByClassName("right-item")[0].addEventListener("click", function() {
        Menu.getMenu("menu-shop.html").build().displayMenu()
    });

    document.addEventListener('mousemove', Listeners.mouseMove);
    document.addEventListener("mousedown", Listeners.mouseDown);

    TOOLBAR_CATEGORY.CROP.addEventListener("mousedown", Listeners.mouseDownToolBar);
    TOOLBAR_CATEGORY.FENCE.addEventListener("mousedown", Listeners.mouseDownToolBar);
}