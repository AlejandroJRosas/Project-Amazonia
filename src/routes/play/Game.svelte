<script lang="ts">
	import type { Card } from '$lib/types/card'
	import type { PlayersQuantity } from '$lib/types/game-settings'
	import { Avatar } from '@skeletonlabs/skeleton'

	export let cards: Card[]
	export let playerQuantity: PlayersQuantity

	$: if (cards) {
		cards = [...cards, ...cards]
	}
</script>

<div class="flex flex-col items-center gap-2 pt-6">
	<div class="mx-auto flex w-[90%] justify-between">
		<section class="flex">
			<div class="flex flex-col items-center">
				<Avatar src="https://i.redd.it/fupyikwwe2191.jpg" class="border-4 border-red-600" />
				<p>Jugador 1</p>
				<p>Jaguar</p>
			</div>
			<p>630</p>
		</section>

		<section class="flex">
			<p>630</p>
			<div class="flex flex-col items-center">
				<Avatar
					src="https://i.redd.it/fupyikwwe2191.jpg"
					class={'border-4 ' +
						(playerQuantity >= 2 ? 'border-blue-600' : 'border-gray-600 opacity-60')}
				/>
				{#if playerQuantity >= 2}
					<p>Jugador 2</p>
					<p>Jaguar</p>
				{/if}
			</div>
		</section>
	</div>

	<div class="mx-auto grid h-[400px] w-[90%] grid-cols-4 border border-red-500">
		{#each cards as card}
			<div class="flex aspect-square w-[50px] flex-col items-center bg-green-300">
				<p>{card.name}</p>
			</div>
		{/each}
	</div>

	<div class="mx-auto flex w-[90%] justify-between">
		<section class="flex">
			<div class="flex flex-col items-center">
				<Avatar
					src="https://i.redd.it/fupyikwwe2191.jpg"
					class={'border-4 ' +
						(playerQuantity >= 3 ? 'border-green-600' : 'border-gray-600 opacity-60')}
				/>
				{#if playerQuantity >= 3}
					<p>Jugador 3</p>
					<p>Jaguar</p>
				{/if}
			</div>
			{#if playerQuantity >= 3}
				<p>630</p>
			{/if}
		</section>

		<section class="flex">
			{#if playerQuantity >= 4}
				<p>630</p>
			{/if}
			<div class="flex flex-col items-center">
				<Avatar
					src="https://i.redd.it/fupyikwwe2191.jpg"
					class={'border-4 ' +
						(playerQuantity >= 4 ? 'border-yellow-600' : 'border-gray-600 opacity-60')}
				/>
				{#if playerQuantity >= 4}
					<p>Jugador 4</p>
					<p>Jaguar</p>
				{/if}
			</div>
		</section>
	</div>

	<button class="variant-filled-primary btn max-w-xs">CARRUSEL</button>
</div>
