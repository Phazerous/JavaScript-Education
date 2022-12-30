const pos1 = document.getElementById('pos1');
const pos2 = document.getElementById('pos2');
const draggableItem = document.getElementById('drag');

function drag(e) {
  e.dataTransfer.setData('text', e.target.id);
}

function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text');
  e.target.appendChild(document.getElementById(data));
}

pos1.addEventListener('drop', drop);
pos1.addEventListener('dragover', (e) => e.preventDefault());
pos2.addEventListener('drop', drop);
pos2.addEventListener('dragover', (e) => e.preventDefault());

draggableItem.addEventListener('dragstart', drag);
