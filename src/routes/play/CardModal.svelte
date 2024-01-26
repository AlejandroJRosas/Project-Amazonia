<script lang="ts">
	import { categoryImages } from '$lib/cards'
	import type { Card } from '$lib/types/card'
	import { fade, scale } from 'svelte/transition'

	export let opened = false

	export let card: Card = {
		id: 1,
		name: 'Chica maga oscura',
		description:
			'Una carta (カード Kādo) constituye un elemento fundamental para el juego cartas. Representa un Monstruo, una Mágica o una Trampa con los cuales se lleva a cabo un Duelo. Un Deck Principal normal debe incluir entre 40 a 60 cartas, y sólo puede tenerse tres copias de la misma carta.',
		imgSrc: 'https://pm1.aminoapps.com/6224/52710263c25ca0e19f7e7c319157633727b53f07_00.jpg',
		category: 'wildlife',
		isActive: false
	}

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
				<header class="p-2">
					<img alt="img2" src={card.imgSrc} class="aspect-[9/6] w-full object-cover" />
				</header>
				<section class="space-y-4 p-4">
					<h3 class="text-left font-bold uppercase">{card.name}</h3>
					<article>
						<p class="text-justify text-sm leading-relaxed">
							{card.description}
						</p>
					</article>
				</section>
				<footer class="flex items-center justify-start space-x-4 border-t border-[#298681] p-4">
					<figure
						class="avatar text-surface-400-500-token flex aspect-square w-8 items-center justify-center overflow-hidden rounded-full bg-surface-50 font-semibold"
					>
						<img
							alt="category"
							src={categoryImages[card.category]}
							class="h-full w-full object-cover"
						/>
					</figure>
					<p class="text-left text-sm font-bold">
						{card.category === 'wildlife' ? 'Fauna' : ''}
						{card.category === 'plants' ? 'Flora' : ''}
						{card.category === 'locations' ? 'Locaciones' : ''}
					</p>
				</footer>
			</div>
		</button>
	</dialog>
{/if}
