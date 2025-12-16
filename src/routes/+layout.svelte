<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';

  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
  <title>GMJ Furniture | Custom Rattan & Wood Agency</title>
  <meta name="description" content="Handcrafted bespoke furniture by UD. Gunung Martha Jaya. Specializing in rattan, wood, sourced from Bali to the world." />
</svelte:head>

<Navbar />
{@render children()}
<Footer />
