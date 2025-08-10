const grid = document.querySelector('.grid');
const items = grid.querySelectorAll('.item');
const itemCount = items.length;
let cols = 3;
if (itemCount > 9) cols = 4;
if (itemCount > 12) cols = 5;

grid.classList.add(`cols-${cols}`);

const itemsPerRow = cols;
const lastRowStart = Math.floor((itemCount - 1) / itemsPerRow) * itemsPerRow;
const lastRowItems = Array.from(items).slice(lastRowStart);
const lastRowCount = lastRowItems.length;

if (lastRowCount < itemsPerRow) {
    lastRowItems.forEach(item => {
        item.classList.add('last-row');
        const emptySlots = itemsPerRow - lastRowCount;
        const startCol = Math.floor(emptySlots / 2) + 1;
        item.style.gridColumn = `${startCol} / span ${lastRowCount}`;
    });
}