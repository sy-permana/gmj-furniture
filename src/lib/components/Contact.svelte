 <script lang="ts">
  // No script needed
</script>

<section class="section-padding contact" id="contact">
  <div class="container contactContainer">
    <div class="info">
      <h2 class="title">Start Your Custom Project</h2>
      <p class="text">
        Whether you are looking for a single statement piece or outfitting an entire resort, 
        our team is ready to bring your vision to life.
      </p>
      
      <div class="contactDetails">
        <div class="detailItem">
          <h3>Visit Showroom</h3>
          <p>Jl. Gunung Salak No.38X, Padangsambian Klod</p>
          <p>Denpasar, Bali 80117</p>
        </div>
        <div class="detailItem">
          <h3>Contact</h3>
          <p>info@gmjfurniture.com</p>
          <p>+62 822-9995-5828</p>
        </div>
      </div>
    </div>

    <form class="form" onsubmit={(e: SubmitEvent) => e.preventDefault()}>
      <div class="formGroup">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Your Name" />
      </div>
      <div class="formGroup">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="email@example.com" />
      </div>
      <div class="formGroup">
        <label for="message">Message</label>
        <textarea id="message" rows="5" placeholder="Tell us about your project..."></textarea>
      </div>
      <button type="submit" class="btn-primary" style="width: 100%;">Send Inquiry</button>
    </form>
  </div>
</section>

<style>
  .contact {
    background-color: var(--color-cream-bg);
  }

  .contactContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }

  .title {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: var(--color-forest-deep);
  }

  .text {
    color: var(--color-text-muted);
    line-height: 1.7;
    margin-bottom: 3rem;
    font-size: 1.1rem;
  }

  .contactDetails {
    display: grid;
    gap: 2rem;
  }

  .detailItem h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--color-text-main);
    font-family: var(--font-serif);
  }

  .detailItem p {
    color: var(--color-text-muted);
    font-size: 0.95rem;
  }

  .form {
    background-color: var(--color-white);
    padding: 3rem;
    border-radius: 4px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.03);
  }

  .formGroup {
    margin-bottom: 1.5rem;
  }

  .formGroup label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--color-text-muted);
    letter-spacing: 0.05em;
  }

  .formGroup input,
  .formGroup textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    font-family: var(--font-sans);
    font-size: 1rem;
    background-color: #fcfcfc;
    transition: border-color 0.3s;
  }

  .formGroup input:focus,
  .formGroup textarea:focus {
    outline: none;
    border-color: var(--color-sage-primary);
    background-color: #fff;
  }

  @media (max-width: 900px) {
    .contactContainer {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    
    .form {
      padding: 1.5rem;
    }
  }
</style>
