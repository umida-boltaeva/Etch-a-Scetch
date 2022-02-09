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
  // TODO: pop up prompt and get grid size from user

  let gridSize = prompt('Enter the grid size, please.'); // TODO: Validate the input!
  // TODO: clear the container

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  // TODO: draw new grid with new size

  drawGrid(gridSize);
}

drawGrid(10);
