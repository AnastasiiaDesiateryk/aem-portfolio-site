// import { createOptimizedPicture } from '../../scripts/scripts.js';

// export default function decorate(block) {
//   block.innerHTML = ''; // очищаем
//   const picture = createOptimizedPicture(
//     'https://images.unsplash.com/photo-1503264116251-35a269479413',
//     'Abstract background',
//     true,
//     [
//       { media: '(min-width: 1025px)', width: '1200' },
//       { media: '(min-width: 481px)', width: '768' },
//       { width: '360' },
//     ]
//   );
//   const wrapper = document.createElement('div');
//   wrapper.className = 'hero-text';
//   wrapper.innerHTML = `
//     <h1>Welcome to My Portfolio</h1>
//     <p>This site was built with AEM Live to showcase how fast and efficient modern web tools can be.</p>
//     <a class="button" href="/contact">Contact Me</a>
//   `;
//   block.append(picture, wrapper);
// }
/*
 * Copyright 2025 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * You may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-env browser */

import { createOptimizedPicture } from '../../scripts/scripts.js';

export default function decorate(block) {
  block.innerHTML = '';

  const picture = createOptimizedPicture(
    'https://images.unsplash.com/photo-1503264116251-35a269479413',
    'Abstract background',
    true, // eager
    [
      { media: '(min-width: 1025px)', width: '1200' },
      { media: '(min-width: 481px)', width: '768' },
      { width: '360' }, // default fallback (mobile)
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

