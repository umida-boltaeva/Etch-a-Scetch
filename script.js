const container = document.getElementById('container');

function drawGrid(limit) {
  container.style.gridTemplate = `repeat(${limit}, 1fr) / repeat(${limit}, 1fr)`;

  for (let i = 0; i < limit * limit; i++) {
    const div = document.createElement('div');
    div.classList.add('mini-div');
    div.addEventListener('mouseenter', (e) => {
      div.classList.add('hovered');
    });
    container.appendChild(div);
  }
}
function reset() {
  let gridSize;

  // pop up prompt and get grid size from user
  do {
    gridSize = prompt('Enter the grid size between 2 and 100, please.');

    //if cancel clicked on prompt, it shouldn't reset
    if (gridSize == null) return;
  } while (!isValidSize(gridSize));

  // clear the container
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // draw new grid with new size
  drawGrid(gridSize);
}

function isValidSize(input) {
  if (isNaN(input)) return false; // ignore not-a-number cases.

  const numValue = Number(input);

  if (!Number.isInteger(numValue)) return false; // ignore non-integer cases.

  if (numValue < 2 || numValue > 100) return false; // ignore not-in-a-range cases.

  return true;
}

drawGrid(16);
