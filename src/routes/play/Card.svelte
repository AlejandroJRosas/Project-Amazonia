<script lang="ts">
	import type { Card } from '$lib/types/card'
	import { scale, fly } from 'svelte/transition'

	export let card: Card
	export let toggleCard: () => void
	export let cardIsLoaded: () => void
	export let isDisabled: boolean
	export let borderColor: () => string

	export let showing = false
</script>

<button
	disabled={isDisabled}
	on:click={() => {
		toggleCard()
	}}
	class="perspective items-centerbg-transparent m-auto aspect-square w-full px-1"
>
	<div
		class={'preserve-3d relative h-full w-full transition-transform duration-700 ' +
			(showing ? 'flip' : '')}
	>
		<div class="perspective rotate absolute h-full w-full">
			<span
				transition:scale
				class={'back-side variant-filled-warning badge-icon absolute left-1 top-1 z-10 overflow-hidden ' +
					'bg-' +
					(card.playerPointColor ? card.playerPointColor : 'transparent')}
			>
				<!-- <span -->
				<!-- 	in:fly={{ y: 100 }} -->
				<!-- 	out:fly={{ y: -100 }} -->
				<!-- 	class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-medium text-white" -->
				<!-- > -->
				<!-- 	{(card.playerPointRound ? card.playerPointRound : '')} -->
				<!-- </span> -->
			</span>
			<img
				class={'rotate rotate back-side h-full w-full rounded-lg object-cover ' + borderColor}
				src={card.imgSrc}
				alt={card.name}
				on:load={cardIsLoaded}
			/>
		</div>
		<div class="hidden-back absolute h-full w-full rounded-lg bg-slate-600">
			<!-- {card.id} -->
			<img
				class="h-3/5 translate-x-2/3 translate-y-1/3 object-cover"
				src={'../../../public/question-mark.png'}
				alt="question-mark"
			/>
		</div>
	</div>
</button>

<style>
	.hidden-back {
		backface-visibility: hidden;
	}

	.flip {
		transform: rotateY(180deg);
	}

	.back-side {
		transform: rotateY(180deg);
	}

	.preserve-3d {
		transform-style: preserve-3d;
	}

	.perspective {
		perspective: 500px;
	}
</style>
