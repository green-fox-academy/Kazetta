'use strict';

let posX = 0;
let posY = 0;
let size = 1000;
const navigation = (event) => {
    let direction = event.target.dataset.direction;
    let inspector = document.querySelector('.img-inspector');
    if (direction === 'up') {
        posY -= 10;
        inspector.style.backgroundPositionY = posY + 'px';
    };
    if (direction === 'down') {
        posY += 10;
        inspector.style.backgroundPositionY = posY + 'px';
    };
    if (direction === 'left') {
        posX -= 10;
        inspector.style.backgroundPositionX = posX + 'px';
    };
    if (direction === 'right') {
        posX += 10;
        inspector.style.backgroundPositionX = posX + 'px';
    };
    if (direction === 'in') {
        size += 20;
        inspector.style.backgroundSize = size + 'px';
    };
    if (direction === 'out') {
        size -= 20;
        inspector.style.backgroundSize = size + 'px';
    };
};
document.querySelector('nav').addEventListener('click', navigation);