const cardFrames = document.querySelectorAll('.frame');
const cards = document.querySelectorAll('.card');

function mouseMove(e, index) {
  const card = cards[index];
  const cardRect = card.getBoundingClientRect();

  const cardCenterX = cardRect.left + cardRect.width / 2;
  const cardCenterY = cardRect.top + cardRect.height / 2;

  const deltaX = cardCenterX - e.clientX;
  const deltaY = cardCenterY - e.clientY;

  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

  card.style.boxShadow = `
    ${-deltaX / 20}px ${-deltaY / 40}px 10px rgba(0, 0, 0, 0.2)
  `;

  card.style.transform = `
    rotate3d(${-deltaY / 100}, ${deltaX / 100}, 0, ${distance / 8}deg)
  `;
}

function resetCardStyles(index) {
  const card = cards[index];
  card.style.boxShadow = '';
  card.style.transform = '';
}

cardFrames.forEach((frame, index) => {
  frame.addEventListener('mouseenter', (e) => {
    mouseMove(e, index);

    frame.addEventListener('mousemove', (e) => {
      mouseMove(e, index);
    });
  });

  frame.addEventListener('mouseleave', () => {
    resetCardStyles(index);
    frame.removeEventListener('mousemove', mouseMove);
  });
});
