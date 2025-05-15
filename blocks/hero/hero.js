export default function decorate(block) {
  block.innerHTML = `
    <picture>
      <source 
        srcset="https://images.unsplash.com/photo-1503264116251-35a269479413?w=600&auto=format&fit=crop 600w,
                https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200&auto=format&fit=crop 1200w"
        sizes="(max-width: 600px) 600px, 1200px"
        type="image/jpeg">
      <img
        src="https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200&auto=format&fit=crop"
        alt="Abstractbackground"
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
