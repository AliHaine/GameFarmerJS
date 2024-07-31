import {infiniteResources} from "../game_manager/game_settings.js";

const resourceBarElement = document.getElementById('ressourcebar').getElementsByTagName('ul')[0];

export const TOOLBAR_CATEGORY = {
    CROP: document.getElementById('dropup-crop'),
    FENCE: document.getElementById('dropup-fence')
}

export function addChildToResourceBar(element) {
    resourceBarElement.appendChild(element);
}

/**
 * Add a certain number to a resource in the displayed resource navbar.
 *
 * This function is used to update the quantity of a resource displayed
 * in the navigation bar of the user interface
 *
 * @param {Resource} resource - The resource to add
 * @param {int} number - The amount of resource to add
 */
export function updateResourceBarNumber(resource, number) {
    const img = resourceBarElement.querySelector(`li img[id="${resource.getResourceId()}"]`);
    const span = img.parentElement.querySelector('span');
    span.textContent = (parseInt(span.textContent) + number).toString()
}

export function addChildToToolBar(toolbarCategory, element) {
    toolbarCategory.appendChild(element);
}

export function updateToolBarQuantity(element, quantity) {
    if (infiniteResources)
        return;
    const elementQuantity = parseInt(element.elementHtmlDiv.querySelector(".txtNumber").textContent)
    element.elementHtmlDiv.querySelector(".txtNumber").textContent = elementQuantity + quantity;
}