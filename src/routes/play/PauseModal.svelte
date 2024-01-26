<script lang="ts">
	import { fade, scale } from 'svelte/transition'

	export let opened = false

	function close() {
		opened = false
	}
</script>

{#if opened}
	<dialog open class="z-20 h-full w-full bg-black bg-opacity-60 ring-0" transition:fade>
		<button on:click={close} class="h-full w-full">
			<div
				in:scale
				class="card variant-filled-primary mx-auto w-[85%] max-w-lg overflow-hidden rounded-lg"
			>
				<button>Salir</button>
			</div>
		</button>
	</dialog>
{/if}
