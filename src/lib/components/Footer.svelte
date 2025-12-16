<script lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="container footerContainer">
    <div class="column">
      <h3 class="heading">GMJ Furniture</h3>
      <p class="subtext">Authentic Balinese Rattan & Wood Craftsmanship.</p>
    </div>
    
    <div class="column">
      <h4>Contact</h4>
      <p>Jl. Gunung Salak No.38X</p>
      <p>Padangsambian Klod, Denpasar</p>
      <p>Bali 80117</p>
      <a href="https://maps.app.goo.gl/AvuyeNMzkHhhGUaF9" target="_blank" rel="noopener noreferrer" class="mapLink">View on Map</a>
    </div>

    <div class="column">
      <h4>Links</h4>
      <a href="#collection">Collection</a>
      <a href="#services">Services</a>
      <a href="#about">About Us</a>
    </div>
  </div>
  <div class="copyright">
    &copy; {currentYear} UD. Gunung Martha Jaya. All rights reserved.
  </div>
</footer>

<style>
  .footer {
    background-color: var(--color-forest-deep);
    color: var(--color-cream-bg);
    padding: 4rem 0 1rem;
    margin-top: 4rem;
  }

  .footerContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .heading {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--color-sage-primary);
  }

  .subtext {
    opacity: 0.8;
    line-height: 1.6;
  }

  .column h4 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-family: var(--font-sans);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .column p, .column a {
    display: block;
    opacity: 0.8;
    line-height: 1.8;
    margin-bottom: 0.5rem;
  }

  .column a:hover {
    text-decoration: underline;
    opacity: 1;
  }

  .mapLink {
    color: var(--color-sage-primary) !important;
    font-weight: 600;
  }

  .copyright {
    text-align: center;
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 1.5rem;
    font-size: 0.85rem;
    opacity: 0.6;
  }
</style>
