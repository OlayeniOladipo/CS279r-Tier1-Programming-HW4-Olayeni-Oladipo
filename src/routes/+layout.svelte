<!-- script is a block where the logic goes containing javascript. -->
<script>
	/* imports the Header html from another file to be reused here. */
	import Header from '$lib/header/Header.svelte';
	/* imports the CSS rules in the app.css file. */
	import '../app.css';
</script>

<!-- markup goes here - post script and before style. -->

<!-- Imports and places the Header.svelte code here. -->
<Header />

<main>
	<!-- slot allows for multiple things to fill the main section
	     depening on what it is. -->
	<slot />
</main>

<footer>
	<p>Press the TODOS tab above!</p>
</footer>

<!-- Within style is where the CSS goes. Self-explanatory and 
     understood from past assignments. -->
<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	/* Explained @media in app.css file. */
	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
