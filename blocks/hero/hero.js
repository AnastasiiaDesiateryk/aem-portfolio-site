export default function decorate(block) {
  block.innerHTML = `
    <picture>
      <source 
        srcset="
          https://images.unsplash.com/photo-1503264116251-35a269479413?w=480&auto=format&fit=crop 480w,
          https://images.unsplash.com/photo-1503264116251-35a269479413?w=800&auto=format&fit=crop 800w,
          https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200&auto=format&fit=crop 1200w"
        sizes="(max-width: 480px) 100vw, (max-width: 800px) 100vw, 1200px"
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
  `;
}

