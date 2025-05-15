import { createOptimizedPicture } from '../../scripts/scripts.js';

export default function decorate(block) {
  block.innerHTML = ''; // очищаем
  const picture = createOptimizedPicture(
    'https://images.unsplash.com/photo-1503264116251-35a269479413',
    'Abstract background',
    true,
    [
      { media: '(min-width: 1025px)', width: '1200' },
      { media: '(min-width: 481px)', width: '768' },
      { width: '360' },
    ]
  );
  const wrapper = document.createElement('div');
  wrapper.className = 'hero-text';
  wrapper.innerHTML = `
    <h1>Welcome to My Portfolio</h1>
    <p>This site was built with AEM Live to showcase how fast and efficient modern web tools can be.</p>
    <a class="button" href="/contact">Contact Me</a>
  `;
  block.append(picture, wrapper);
}
