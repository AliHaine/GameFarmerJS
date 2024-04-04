class BlockBuilder {
	constructor(block) {}

	withIcon(icon) {
		this.icon = icon;
		return this;
	}

	withNaturalSpawnChance(naturalSpawnChance) {
		this.naturalSpawnChance = naturalSpawnChance;
		return this;
	}

	withBlockAction(blockAction) {
		this.blockAction = blockAction;
		return this;
	}

	withLoot(resource, resourceNumber = 1) {
		this.resource = resource;
		this.resourceNumber = resourceNumber;
		return this;
	}

	withDisplayName(displayName) {
		this.displayName = displayName;
		return this;
	}

	withDisplayCategory(displayCategory) {
		this.displayCategory = displayCategory;
		return this;
	}

	build() {
		//build
	}
}