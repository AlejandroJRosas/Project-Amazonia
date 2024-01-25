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
	<dialog open class="z-20 flex h-full w-full bg-black bg-opacity-60 ring-0" transition:fade>
		<button on:click={close} class="h-full w-full">
			<figure
				in:scale
				class="rounded-2 border-gra mx-auto flex h-[450px] w-[300px] flex-col items-center gap-5 self-center rounded-xl border-8 border-[#4C5F6B] bg-[#A47057] shadow-black drop-shadow-2xl"
			>
				<header
					class="mt-[5%] flex h-[10%] w-[90%] flex-row items-center justify-between border border-black"
				>
					<h3 class="font-serif font-bold uppercase">{card.name}</h3>
					<img
						alt="category"
						src={categoryImages[card.category]}
						class="ml-4 aspect-square h-[100%] rounded-full"
					/>
				</header>
				<img
					alt="img2"
					src={card.imgSrc}
					class="aspect-square w-[85%] border-4 border-gray-600 object-cover"
				/>
				<footer class="w-[90%] rounded-lg border-2 border-yellow-600 bg-white bg-opacity-70">
					<h4 class="text-[13px] font-bold uppercase">[Descripción]</h4>
					<p class="text-justify text-[10px] leading-relaxed">
						{card.description}
					</p>
				</footer>
			</figure>
		</button>
	</dialog>
{/if}
