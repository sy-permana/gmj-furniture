<script lang="ts">
  // No script logic needed for this presentation component
</script>

<nav class="navbar">
  <div class="container navContainer">
    <a href="/" class="logo">
      GMJ Furniture
    </a>
    <div class="links">
      <a href="#collection">Collection</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#contact" class="btn-primary">Contact</a>
    </div>
  </div>
</nav>

<style>
  .navbar {
    padding: 1.5rem 0;
    background-color: var(--color-cream-bg);
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 1px solid rgba(0,0,0,0.05);
  }

  .navContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-family: var(--font-serif);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-forest-deep);
    letter-spacing: -0.02em;
  }

  .links {
    display: flex;
    gap: 2rem;
    align-items: center;
    font-size: 0.95rem;
    color: var(--color-text-main);
    font-weight: 500;
  }

  /* Note: :global(.btn-primary) is not needed if the class is global, but scoped styles won't apply to it unless we target it specifically or use global. 
     However, here we are just styling children of .links. 
     The btn-primary styles are in global app.css, so we don't need to redefine them here.
  */

  .links a:hover {
    color: var(--color-sage-primary);
  }

  /* Mobile responsive adjustments */
  @media (max-width: 768px) {
    .links {
      display: none; /* Simple hide for now */
    }
  }
</style>
