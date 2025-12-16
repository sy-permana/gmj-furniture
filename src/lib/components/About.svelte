<script lang="ts">
  // No script needed
</script>

<section class="about" id="about">
  <div class="container aboutContainer">
    <div class="imageParams">
       <img src="/images/about-artisan.png" alt="Artisan Weaving" class="aboutImage" />
    </div>
    <div class="content">
      <h2 class="title">Rooted in Tradition</h2>
      <p class="text">
        Founded as <strong>UD. Gunung Martha Jaya</strong>, our journey began in the heart of Bali. 
        We believe that true luxury lies in the details—the curve of a rattan pole, the grain of teak wood, 
        and the hand that weaves them together.
      </p>
      <p class="text">
        Every piece in our collection tells a story of heritage and craftsmanship. We partner directly 
        with local artisans to preserve these time-honored techniques while introducing modern aesthetics 
        to homes around the world.
      </p>
      <button class="btn-primary" style="margin-top: 2rem;">Read Our Story</button>
    </div>
  </div>
</section>

<style>
  .about {
    padding: 6rem 0;
    background-color: var(--color-white);
  }

  .aboutContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }

  .imageParams {
    height: 500px;
    position: relative;
  }

  .aboutImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  .content {
    padding-left: 1rem;
  }

  .title {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: var(--color-forest-deep);
  }

  .text {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--color-text-muted);
    margin-bottom: 1.5rem;
  }

  @media (max-width: 900px) {
    .aboutContainer {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .imageParams {
      height: 350px;
    }
    .content {
      padding-left: 0;
    }
  }
</style>
