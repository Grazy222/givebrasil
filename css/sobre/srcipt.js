javascript
const imageContainer = document.querySelectorAll('.image-container');

imageContainer.forEach((container) => {
  const caption = container.querySelector('.caption');

  container.addEventListener('click', () => {
    caption.style.display = 'block';
  });
});