import { createOptimizedPicture } from '../../scripts/scripts.js';

export default function decorate(block) {
  block.textContent = ''; 

  const picture = createOptimizedPicture(
    'https://images.unsplash.com/photo-1503264116251-35a269479413', // src без ?params
    'Abstract background',
    true, // eager — т.к. LCP
    [
      { media: '(min-width: 1200px)', width: '1200' },
      { media: '(min-width: 600px)', width: '800' },
      { width: '480' }, 
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
