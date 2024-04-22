<script lang="ts">
	import type { Card } from '$lib/types/card'
	import { scale } from 'svelte/transition'

	export let card: Card
	export let toggleCard: () => void
	export let cardIsLoaded: () => void
	export let isDisabled: boolean
	export let showing = false

  export let borderColor: () => string
  export let isSelected: () => boolean

  // border-red-500
  // border-blue-400
  // border-yellow-500
  // border-purple-400
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
				class={'back-side variant-filled-warning badge-icon absolute left-1 top-1 z-10 h-3 w-3 overflow-hidden ' +
					'bg-' +
					(card.playerPointColor ? card.playerPointColor : 'transparent')}
			/>
      <!-- border-red-500 -->
			<img
				class={'rotate rotate back-side h-full w-full rounded-lg object-cover ' + 
        (isSelected() ? 'border-2 ' + borderColor() : '')}
				src={card.imgSrc}
				alt={card.name}
				on:load={cardIsLoaded}
			/>
		</div>
		<div class="hidden-back absolute h-full w-full rounded-lg bg-slate-600">
			<!-- {card.id} -->
			<img
				class="h-3/5 translate-x-2/3 translate-y-1/3 object-cover"
				src={'assets/question-mark.avif'}
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
