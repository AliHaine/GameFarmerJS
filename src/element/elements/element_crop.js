import Element from "./../element.js"
import ActionHarvest from "../element_actions/action_harvest.js";
import {newImages, getImageNumber} from "../../utils.js";
import {addImgToSquare, replaceElementImg} from "../../view/render.js";
import {timeToGrow} from "../../game_manager/game_settings.js";
import {TOOLBAR_CATEGORY, updateToolBarQuantity} from "../../view/bar.js";
import Player from "../../game/player.js";

export default class ElementCrop extends Element {
	constructor(image, displayName, timeToGrow, resource, resourceNumber = 1) {
		super(image, new ActionHarvest());
		this.timeToGrowth = timeToGrow;
		this.setLootable(resource, resourceNumber)
		this.stageImages = this.setImagesStage();
		this.setDisplayName(displayName)
		this.setHtmlDisplayCategory(TOOLBAR_CATEGORY.CROP)
	}

	performSetElementToSquare(square) {
		if (!square.querySelector('img#ground_farm'))
			return;
		addImgToSquare(square, this.stageImages[0]);
		for (let i= 1; i <= this.stageImages.length - 1; i++) {
			setTimeout(() => {
				replaceElementImg(square, this.stageImages[i]);
			}, this.#cropGrowthCalculation(i));
		}
		this.updateQuantity(-1)
	}

	#cropGrowthCalculation(stage) {
		return (this.timeToGrowth * stage + (Math.random() * this.timeToGrowth)) * timeToGrow;
	}

	isGrown(number) {
		return number === this.stageImages.length - 1;
	}

	setImagesStage() {
		const number = getImageNumber(this.image.getAttribute("src"));
		const path = this.getElementImageSrc().replace(/[0-9]/, "");
		let stageImageTmp = newImages(path, this.getElementId(), number);
		stageImageTmp.push(this.image);
		return stageImageTmp;
	}
}