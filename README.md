Anastasiia Desiateryk – AEM Portfolio Site
Overview
This is a fully responsive portfolio website built with Adobe Experience Manager (AEM) Live as part of a development challenge. It demonstrates how modern web tools and content-driven platforms can be used to build a fast, accessible, and SEO-optimized site — without writing any backend code.
The site includes:
* A navigation menu linking to Home, About, and Contact pages
* A hero section with an optimized background image and clear CTA
* Integrated Google Analytics (GA4)
* Clean, maintainable code split into modular blocks (AEM-style)
* Accessibility and performance best practices

Tech Stack
* Adobe Experience Manager (AEM Live)
* Google Docs (for content authoring)
* GitHub (code versioning)
* PageSpeed Insights (for performance testing)
* GA4 (for analytics)

Key Features
*    Core Web Vitals (CWV) score on mobile and desktop (PageSpeed)
* ✅ Responsive image loading with <picture> and srcset
* ✅ Image size optimized visually via Google Docs + proper srcset behavior
* ✅ Lightweight and semantic HTML with SEO-focused <meta> tags
* ✅ Modular AEM blocks (hero, header, footer, etc.)

Optimization Strategy
* Used <source> and sizes in the hero block to load smaller images for mobile users
* Manually resized the hero background image inside Google Docs (down to ~3 columns wide)
* Used width, height, loading="eager" and decoding="async" for faster rendering
* Removed unused preload and fetchpriority after testing their impact
* Verified speed with Lighthouse: 98–100 score consistently

Google Analytics
GA4 was integrated using the recommended setup:
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TL5RVPPL..."></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-TL5RVPPL...');
</script>

Challenges Faced
* ⛔ Image preload via Docs metadata was tested but removed for better performance
* ⛔ Getting full CWV score required balancing: image size, markup cleanliness, and removing unnecessary JS

Live Site
👉 https://main--aem-portfolio-site--anastasiia.aem.page/
GitHub Repository
👉 https://github.com/AnastasiiaDesiateryk/aem-portfolio-site

Author
Anastasiia Desiateryk Frontend Developer | Passionate about clean UI, performance, and open-s

