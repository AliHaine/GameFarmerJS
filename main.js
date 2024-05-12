let map;
const player = new Player();

document.getElementById('buttonPlay').addEventListener('click', function() {
    defineGameSettings(document.getElementsByTagName("input"));
    document.getElementsByClassName("menu")[0].remove();
    initGame();
});

function initGame() {
    new Map();
    loadListeners();
}

function loadListeners() {
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    })

    document.addEventListener("animationend", (event) => {
        if (event.target.classList.contains('resourceCollectedAnimation'))
            return event.target.remove();
    });

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener("mousedown", mouseDown);

    TOOLBAR_CATEGORY.CROP.addEventListener("mousedown", mouseDownToolBar);
    TOOLBAR_CATEGORY.FENCE.addEventListener("mousedown", mouseDownToolBar);
}

function defineGameSettings(inputs_value) {
    mapHeight = inputs_value[0].value;
    mapWidth = inputs_value[1].value;
    globalGrowthSpeed = inputs_value[2].value;
    globalNaturalGeneration = inputs_value[3].value;
    infiniteResources = inputs_value[5].checked;

    if (!inputs_value[4].checked)
        return
    SOUND.DEFAULT_SOUND.volume = 0.2;
    SOUND.DEFAULT_SOUND.loop = true;
    SOUND.DEFAULT_SOUND.play();
}