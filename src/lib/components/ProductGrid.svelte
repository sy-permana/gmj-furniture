<script lang="ts">
  import { products } from '$lib/data/products';
</script>

<section class="section-padding catalog" id="collection">
  <div class="container">
    <div class="text-center">
      <h2 class="sectionTitle">Curated Collection</h2>
      <p class="sectionSubtitle">Timeless pieces for modern living.</p>
    </div>

    <div class="grid">
      {#each products as product (product.id)}
        <div class="card">
          <div class="imageContainer">
            <enhanced:img src={product.image} alt={product.name} class="productImg" />
          </div>
          <div class="details">
            <h3 class="productName">{product.name}</h3>
            <p class="productDesc">{product.description}</p>
            <div class="footer">
              <span class="price">{product.price}</span>
              <button class="viewBtn">View Details</button>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .catalog {
    background-color: var(--color-cream-bg);
  }

  .sectionTitle {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: var(--color-text-main);
  }

  .sectionSubtitle {
    color: var(--color-text-muted);
    margin-bottom: 4rem;
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 1.2rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2.5rem;
  }

  .card {
    background-color: var(--color-white);
    border-radius: 4px; /* Soft edge */
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .imageContainer {
    height: 320px;
    background-color: #f0f0f0;
    position: relative;
    overflow: hidden;
  }

  .productImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .card:hover .productImg {
    transform: scale(1.05);
  }

  .details {
    padding: 1.5rem;
  }

  .productName {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--color-forest-deep);
    font-family: var(--font-serif);
  }

  .productDesc {
    font-size: 0.9rem;
    color: var(--color-text-muted);
    line-height: 1.5;
    margin-bottom: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2; /* Standard property */
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(0,0,0,0.05);
    padding-top: 1rem;
  }

  .price {
    font-weight: 600;
    color: var(--color-text-main);
  }

  .viewBtn {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-sage-primary);
    font-weight: 600;
    transition: color 0.2s;
  }

  .viewBtn:hover {
    color: var(--color-forest-deep);
  }
</style>
