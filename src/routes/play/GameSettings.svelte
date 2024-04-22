<script lang="ts">
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton'
	import type { Category, Difficulty, PlayersQuantity } from '$lib/types/game-settings'
	import { categoryImages } from '$lib/cards'

	export let selectedCategories: Record<Category, boolean>
	export let difficulty: Difficulty | null
	export let playersQuantity: PlayersQuantity | null

	export let initGame: () => void

	function toggleCategory(category: Category) {
		selectedCategories[category] = !selectedCategories[category]
	}

	function setDifficulty(diff: Difficulty) {
		difficulty = diff
	}

	$: disabledContinueButton = !(
		(selectedCategories.wildlife || selectedCategories.plants || selectedCategories.locations) &&
		difficulty &&
		playersQuantity
	)
</script>

<div class=" flex-col flex gap-6 pt-6">
	<h1 class="h1 m-auto font-bold">Modo de juego</h1>

	<figure class="flex flex-col gap-3">
		<figcaption class="text-center">Categorías</figcaption>
		<ul class="grid w-full grid-cols-3">
			<button on:click={() => toggleCategory('wildlife')} class="m-auto aspect-square w-[90%]">
				<img
					class={'h-full w-full rounded-lg object-cover transition-all ' +
						(selectedCategories.wildlife ? 'scale-100 opacity-100' : 'scale-75 opacity-75')}
					src={categoryImages.wildlife}
					alt="Fauna"
				/>
				<p class="h5 text-center">Fauna</p>
			</button>
			<button on:click={() => toggleCategory('plants')} class="m-auto aspect-square w-[90%]">
				<img
					class={'h-full w-full rounded-lg object-cover transition-all ' +
						(selectedCategories.plants ? 'scale-100 opacity-100' : 'scale-75 opacity-75')}
					src={categoryImages.plants}
					alt="Flora"
				/>
				<p class="h5 text-center">Flora</p>
			</button>
			<button on:click={() => toggleCategory('locations')} class="m-auto aspect-square w-[90%]">
				<img
					class={'h-full w-full rounded-lg object-cover transition-all ' +
						(selectedCategories.locations ? 'scale-100 opacity-100' : 'scale-75 opacity-75')}
					src={categoryImages.locations}
					alt="Locaciones"
				/>
				<p class="h5 text-center">Locaciones</p>
			</button>
		</ul>
	</figure>

	<figure class="mb-4 flex flex-col gap-3">
		<figcaption class="text-center">Dificultad</figcaption>
		<ul class="mx-auto flex gap-2">
			<button
				on:click={() => {
					setDifficulty('easy')
				}}
				class={difficulty === 'easy' ? 'variant-filled-primary btn' : 'variant-ghost-primary btn'}
				>Fácil</button
			>
			<button
				on:click={() => {
					setDifficulty('medium')
				}}
				class={difficulty === 'medium' ? 'variant-filled-warning btn' : 'variant-ghost-warning btn'}
				>Medio</button
			>
			<button
				on:click={() => {
					setDifficulty('hard')
				}}
				class={difficulty === 'hard' ? 'variant-filled-error btn' : 'variant-ghost-error btn'}
				>Difícil</button
			>
		</ul>
	</figure>

	<figure class="flex flex-col gap-3">
		<figcaption class="text-center">Cantidad de jugadores</figcaption>
		<ListBox class="px-2">
			<ListBoxItem bind:group={playersQuantity} name="medium" value={1}>1 jugador</ListBoxItem>
			<ListBoxItem bind:group={playersQuantity} name="medium" value={2}>2 jugadores</ListBoxItem>
			<ListBoxItem bind:group={playersQuantity} name="medium" value={3}>3 jugadores</ListBoxItem>
			<ListBoxItem bind:group={playersQuantity} name="medium" value={4}>4 jugadores</ListBoxItem>
		</ListBox>
	</figure>

	<button
		on:click={initGame}
		disabled={disabledContinueButton}
		class="variant-filled-success btn mx-2">Continuar</button
	>
</div>
