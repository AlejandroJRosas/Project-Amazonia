<script lang="ts">
	import type { Card } from '$lib/types/card'

	export let card: Card
	export let toggleCard: () => void

	export let showing = false
</script>

<button
	on:click={() => {
		toggleCard()
	}}
	class="perspective m-auto aspect-square w-full items-center bg-transparent px-1"
>
	<div
		class={'preserve-3d relative h-full w-full transition-transform duration-700 ' +
			(showing ? 'flip' : '')}
	>
		<div class="perspective rotate absolute h-full w-full">
			<img
				class="rotate rotate back-side h-full w-full rounded-lg object-cover"
				src={card.imgSrc}
				alt={card.name}
			/>
		</div>

		<div class="hidden-back absolute h-full w-full rounded-lg bg-slate-600" />
		<!-- {card.id}
		</div> -->
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
