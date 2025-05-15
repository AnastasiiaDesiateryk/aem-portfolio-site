// export default function decorate(block) {
//   block.innerHTML = `
//     <picture>
//       <source 
//         srcset="https://images.unsplash.com/photo-1503264116251-35a269479413?w=360&auto=format&fit=crop"
//         media="(max-width: 480px)"
//         type="image/jpeg">
//       <source 
//         srcset="https://images.unsplash.com/photo-1503264116251-35a269479413?w=768&auto=format&fit=crop"
//         media="(min-width: 481px) and (max-width: 1024px)"
//         type="image/jpeg">
//       <source 
//         srcset="https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200&auto=format&fit=crop"
//         media="(min-width: 1025px)"
//         type="image/jpeg">
//       <img
//         src="https://images.unsplash.com/photo-1503264116251-35a269479413?w=360&auto=format&fit=crop"
//         alt=""
//         width="360"
//         height="240"
//         loading="eager"
//         decoding="async"
      
//       />
//     </picture>
//     <div class="hero-text">
//       <h1>Welcome to My Portfolio</h1>
//       <p>This site was built with AEM Live to showcase how fast and efficient modern web tools can be.</p>
//       <a class="button" href="/contact">Contact Me</a>
//     </div>
//   `;
// }
export default function decorate(block) {
  block.innerHTML = `
    <picture>
      <source 
        srcset="https://images.unsplash.com/photo-1503264116251-35a269479413?w=600&auto=format&fit=crop"
        media="(max-width: 600px)"
        type="image/jpeg">
      <source 
        srcset="https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200&auto=format&fit=crop"
        media="(min-width: 601px)"
        type="image/jpeg">
      <img
        src="https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200&auto=format&fit=crop"
        alt="Abstract background"
        width="1200"
        height="600"
        loading="eager"
        decoding="async"
      />
    </picture>
    <div class="hero-text">
      <h1>Welcome to My Portfolio</h1>
      <p>This site was built with AEM Live to showcase how fast and efficient modern web tools can be.</p>
      <a class="button" href="/contact">Contact Me</a>
    </div>
  `;
}
