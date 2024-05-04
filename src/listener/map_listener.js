function mouseMoveMap(event) {
	player.setMouseXY(event.clientX, event.clientY);
	const [x, y] = map.getMapMouseXY();
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