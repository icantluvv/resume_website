document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel') as HTMLElement;
  const carouselContainer = document.querySelector('.carousel-container') as HTMLElement;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  carousel.addEventListener('mousedown', (e: MouseEvent) => {
    isDown = true;
    startX = e.pageX - carouselContainer.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('mouseleave', () => {
    isDown = false;
  });

  carousel.addEventListener('mouseup', () => {
    isDown = false;
  });

  carousel.addEventListener('mousemove', (e: MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselContainer.offsetLeft;
    const walk = (x - startX) * 3; // Чувствительность перемещения
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Добавьте обработчики событий для сенсорных устройств, если нужно
});
