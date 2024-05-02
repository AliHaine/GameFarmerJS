function mouseDownMap(event) {
	const mapRect = map.map.getBoundingClientRect();
	const x = Math.floor((player.getMouseX() - mapRect.left) / globalSize);
	const y = Math.floor((player.getMouseY() - mapRect.top) / globalSize);
	if (map.isBorderOfMap(y, x))
		return;

	const square = map.getSquare(x, y);
	if (event.button === 0 && player.getHandBlock() != null)
		player.getHandBlock().setElementToSquare(square);
	else if (event.button === 2) {
		const block = map.getBlockFromSquare(square);
		 if (block.blockAction === undefined)
			 return;
		 block.blockAction.executor(square)
	}
}

function mouseMoveEvent(event) {
	player.setMouseXY(event.clientX, event.clientY);
	const mapRect = map.map.getBoundingClientRect();
	const x = Math.floor((player.getMouseX() - mapRect.left) / globalSize);
	const y = Math.floor((player.getMouseY() - mapRect.top) / globalSize);
	const square = map.getSquare(x, y);
	if (map.isBorderOfMap(y, x))
		return;

	if (map.hoveredSquare === square)
		return;
	if (map.hoveredSquare != null)
		map.hoveredSquare.querySelector("img.ground").classList.remove("square-hover-effect");
	square.querySelector("img.ground").classList.add("square-hover-effect");
	map.hoveredSquare = square;

}