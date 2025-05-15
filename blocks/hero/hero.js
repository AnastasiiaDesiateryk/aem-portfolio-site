export default function decorate(block) {
  block.innerHTML = `
    <picture>
      <source 
        srcset="https://images.unsplash.com/photo-1503264116251-35a269479413?w=480&auto=format&fit=crop"
        media="(max-width: 599px)"
        type="image/jpeg">
      <source 
        srcset="https://images.unsplash.com/photo-1503264116251-35a269479413?w=800&auto=format&fit=crop"
        media="(min-width: 600px) and (max-width: 1199px)"
        type="image/jpeg">
      <source 
        srcset="https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200&auto=format&fit=crop"
        media="(min-width: 1200px)"
        type="image/jpeg">
      <img
        src="https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200&auto=format&fit=crop"
        alt="Abstract background"
        width="1200"
        height="600"
        loading="eager"
        decoding="async"
        fetchpriority="low"
      />
    </picture>
    <div class="hero-text">
      <h1>Welcome to My Portfolio</h1>
      <p>This site was built with AEM Live to showcase how fast and efficient modern web tools can be.</p>
      <a class="button" href="/contact">Contact Me</a>
    </div>
  `;
}
