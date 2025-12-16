<script lang="ts">
  import heroBg from '$lib/assets/images/hero-bg.png?enhanced';
  // No props or state needed
</script>

<section class="hero">
  <div class="container heroContainer">
    <div class="content">
      <span class="subtitle">Welcome to GMJ Furniture</span>
      <h1 class="title">
        Custom Rattan, <br />
        <span class="italic">Artfully Crafted</span>
      </h1>
      <p class="description">
        Bringing the soul of Bali to your space. We specialize in bespoke rattan and wood furniture, sourced ethically and crafted by master artisans.
      </p>
      <div class="actions">
        <a href="#contact" class="btn-primary">
          Start Your Project
        </a>
        <a href="#collection" class="secondaryLink">
          View Collection
        </a>
      </div>
    </div>
    <div class="imageWrapper">
      <!-- Ensure the image assumes the path from static folder -->
      <enhanced:img 
        src={heroBg} 
        alt="Luxury Rattan Living Room in Bali" 
        class="heroImage"
      />
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 85vh;
    display: flex;
    align-items: center;
    background: linear-gradient(to right, var(--color-cream-bg) 50%, #fff 50%); /* Split bg effect */
    position: relative;
    overflow: hidden;
  }

  .heroContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .content {
    padding-right: 2rem;
    z-index: 2;
  }

  .subtitle {
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-size: 0.85rem;
    color: var(--color-text-muted);
    margin-bottom: 1.5rem;
    display: block;
    font-weight: 500;
  }

  .title {
    font-size: 4.5rem;
    line-height: 1.1;
    color: var(--color-text-main);
    margin-bottom: 1.5rem;
  }

  .title .italic {
    font-style: italic;
    font-weight: 400;
    color: var(--color-sage-primary);
  }

  .description {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--color-text-muted);
    margin-bottom: 2.5rem;
    max-width: 90%;
  }

  .actions {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .secondaryLink {
    border-bottom: 1px solid var(--color-text-main);
    padding-bottom: 2px;
    font-size: 0.95rem;
    font-weight: 500;
    transition: opacity 0.3s;
  }

  .secondaryLink:hover {
    opacity: 0.7;
  }

  .imageWrapper {
    height: 500px; /* adjusted relative to VH */
    width: 100%;
    position: relative;
    z-index: 1;
  }

  .heroImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  /* Mobile */
  @media (max-width: 900px) {
    .hero {
      background: var(--color-cream-bg);
      padding: 3rem 0;
      min-height: auto;
    }
    .heroContainer {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .imageWrapper {
      height: 300px;
      order: 0;
    }
    .title {
      font-size: 3rem;
    }
  }
</style>
