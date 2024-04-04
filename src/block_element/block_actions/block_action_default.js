class BlockActionDefault extends BlockAction {
	executor(square) {
		const block = getBlockFromId(square.querySelectorAll('img')[1].getAttribute("id"))
		if (block.getResource() !== undefined)
			block.getResource().addResourceToBar(block.getResourceNumber());
		square.removeChild(square.querySelectorAll('img')[1]);

	}
}