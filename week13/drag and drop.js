const item = document.querySelector('.item');
item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('drop', drop);
});

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const itemId = e.dataTransfer.getData('text/plain');
    const draggedItem = document.getElementById(itemId);
    e.target.appendChild(draggedItem);
}