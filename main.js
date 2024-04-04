let map;
let handBlock = null;


document.getElementsByClassName('buttonPlay')[0].addEventListener('click', function() {
    document.getElementsByClassName('buttonPlay')[0].remove()
    initGame();
    SOUND.DEFAULT_SOUND.volume = 0.5;
    SOUND.DEFAULT_SOUND.loop = true;
    SOUND.DEFAULT_SOUND.play();
});

function initGame() {
    map = new Map();
    loadGlobalListeners();
}

function loadGlobalListeners() {
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    })

    document.getElementById('toolbar').addEventListener('mousedown', mouseDownToolBar);
}

function getBlockFromId(id) {
    for (const blockName in BLOCK) {
        const block = BLOCK[blockName];
        if (block.images[0].getAttribute("id").toUpperCase() === id.toUpperCase())
            return block;
    }
    return null;
}