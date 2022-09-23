<script lang="ts">
	import logo from './assets/svelte.png'
	let count = 0
	$: comparativeCount = count
	let count2 = 0
	let scriptRuns = 0
	let templateRenders = 1
	scriptRuns++

	$: if (count !== comparativeCount) count2++

	const increment = () => {
		count += 1
	}
</script>

<main>
	<img src={logo} alt="Svelte Logo" />
	<button on:click={increment}>
		Count: {count}
	</button>
	<p>
		Count 2: {count2}
	</p>
	<p>Total of script re-runs is: {scriptRuns}</p>
	<p>Total of template renders is: {templateRenders++}</p>
</main>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	img {
		height: 16rem;
		width: 16rem;
	}

	button {
		font-family: inherit;
		font-size: inherit;
		padding: 1em 2em;
		color: #ff3e00;
		background-color: rgba(255, 62, 0, 0.1);
		border-radius: 2em;
		border: 2px solid rgba(255, 62, 0, 0);
		outline: none;
		width: 200px;
		font-variant-numeric: tabular-nums;
		cursor: pointer;
	}

	button:focus {
		border: 2px solid #ff3e00;
	}

	button:active {
		background-color: rgba(255, 62, 0, 0.2);
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}
	}
</style>
