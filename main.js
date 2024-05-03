let map;
const player = new Player();

document.getElementById('buttonPlay').addEventListener('click', function() {
    defineGameSettings(document.getElementsByTagName("input"));
    document.getElementsByClassName("menu")[0].remove();
    initGame();
});

function initGame() {
    new Map();
    loadGlobalListeners();
}

function test(event) {
    const target = event.target.closest('.left-item');

    MENU.SETTINGS.style.display = MENU.SETTINGS.style.display === "none" ? "flex" : "none";
}

function loadGlobalListeners() {
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    })

    document.getElementById('toolbar').addEventListener('mousedown', mouseDownToolBar);
    document.getElementsByClassName("left-item")[0].addEventListener('mousedown', test)
}

function getBlockFromId(id) {
    for (const blockName in BLOCK) {
        const block = BLOCK[blockName];
        if (block.images[0].getAttribute("id").toUpperCase() === id.toUpperCase())
            return block;
    }
    return null;
}

function defineGameSettings(element) {
    mapHeight = element[0].value;
    mapWidth = element[1].value;
    globalGrowthSpeed = element[2].value;
    globalNaturalGeneration = element[3].value;

    if (!element[4].checked)
        return
    SOUND.DEFAULT_SOUND.volume = 0.2;
    SOUND.DEFAULT_SOUND.loop = true;
    SOUND.DEFAULT_SOUND.play();
}