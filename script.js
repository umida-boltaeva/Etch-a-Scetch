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
  // TODO: pop up prompt and get grid size from user -- DONE
  // TODO: clear the container -- DONE
  // TODO: draw new grid with new size -- DONE
  // TODO: Validate the input! -- DONE

  let gridSize;

  do {
    gridSize = prompt('Enter the grid size between 2 and 100, please.');
  } while (!isValidSize(gridSize));

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  drawGrid(gridSize);
}

function isValidSize(input) {
  if (isNaN(input)) return false; // ignore not-a-number cases.

  const numValue = Number(input);

  if (!Number.isInteger(numValue)) return false; // ignore non-integer cases.

  if (numValue < 2 || numValue > 100) return false; // ignore not-in-a-range cases.

  return true;
}

drawGrid(4);
