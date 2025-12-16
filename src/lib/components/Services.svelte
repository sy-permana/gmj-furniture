<script lang="ts">
  // No script needed
</script>

<section class="section-padding services" id="services">
  <div class="container">
    <div class="header">
      <h2 class="sectionTitle">Craftsmanship & Service</h2>
      <p class="sectionSubtitle">We handle everything from sketch to shipping.</p>
    </div>
    
    <div class="grid">
      <div class="card">
        <div class="icon">✏️</div>
        <h3>Custom Design</h3>
        <p>Work with our team to create bespoke furniture pieces that match your exact specifications and vision.</p>
      </div>
      
      <div class="card">
        <div class="icon">🌿</div>
        <h3>Ethical Sourcing</h3>
        <p>We source the finest sustainable rattan and teak wood from local Indonesian communities.</p>
      </div>
      
      <div class="card">
        <div class="icon">🚢</div>
        <h3>Global Shipping</h3>
        <p>Secure packaging and reliable logistics to deliver your furniture safely to any destination worldwide.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .services {
    background-color: var(--color-white);
  }

  .header {
    text-align: center;
    margin-bottom: 4rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .sectionTitle {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--color-text-main);
  }

  .sectionSubtitle {
    color: var(--color-text-muted);
    font-size: 1.1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
  }

  .card {
    padding: 2.5rem;
    background-color: var(--color-cream-bg);
    border-radius: 4px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    display: inline-block;
    background-color: var(--color-white);
    width: 80px;
    height: 80px;
    line-height: 80px;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0,0,0,0.03);
  }

  .card h3 {
    font-family: var(--font-serif);
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--color-forest-deep);
  }

  .card p {
    color: var(--color-text-muted);
    line-height: 1.6;
  }
</style>
