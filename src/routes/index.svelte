<script>
import { onMount } from 'svelte';


	let Counter;
	onMount(async () =>{
		Counter = (await import('../components/Counter.svelte')).default
	})
	
</script>
<main>
	<div class="grid text-center justify-items-center p-5">
		<div clss="max-auto max-w-full">
			<img
				alt=""
				src="assets/svelte-logo.png"
			/>
		</div>
		<div class="text-red-400 text-5xl p-5">Hello world SvelteKit!</div>
		<svelte:component this={Counter}/>
		<p class="text-2xl p-5 text-gray-500">
			Visit the <a class="text-red-300" href="https://svelte.dev">svelte.dev</a> to learn how to
			build Svelte apps.
		</p>
	</div>
</main>
