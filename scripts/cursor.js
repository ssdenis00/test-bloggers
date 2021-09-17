const cursor = document.querySelector('.cursor');
const cursorHover = document.querySelector('.cursor-hover');
const hoverElements = document.querySelectorAll('.hover');

const mouseMove = function (e) {
  let x = e.pageX;
  let y = e.pageY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  cursorHover.style.left = x - 21 + "px";
  cursorHover.style.top = y - 21 + "px";
};

const addActiveCursor = () => {
  cursorHover.classList.add('cursor-hover_active');
}

const removeActiveCursor = () => {
  cursorHover.classList.remove('cursor-hover_active');
}

hoverElements.forEach(btn => {
  btn.addEventListener('mouseover', addActiveCursor);
  btn.addEventListener('mouseout', removeActiveCursor);
})

document.addEventListener("mousemove", mouseMove);