<script lang="ts">
	import type { Category, Difficulty } from '$lib/types/game-settings'
	import type { Card } from '$lib/types/card'
	import Game from './Game.svelte'
	import GameSettings from './GameSettings.svelte'
	import { getRandomCards } from '$lib/get-random-cards'

	let selectedCategories: Record<Category, boolean> = {
		wildlife: false,
		plants: false,
		locations: false
	}
	let difficulty: Difficulty | null = null
	let playerQuantity: 1 | 2 | 3 | 4 | null = null

	let currentScreen: 'settings' | 'game' = 'settings'

	let cards: Card[] = []

	function initGame() {
		if (!difficulty) return

		const categoriesSet = new Set(
			Object.keys(selectedCategories).filter((c) => !!selectedCategories[c as Category])
		) as Set<Category>

		cards = getRandomCards(categoriesSet, difficulty)
		currentScreen = 'game'
	}
</script>

{#if currentScreen === 'settings'}
	<GameSettings
		bind:selectedCategories
		bind:difficulty
		bind:playersQuantity={playerQuantity}
		{initGame}
	/>
{:else if cards && playerQuantity && difficulty}
	<Game {cards} {playerQuantity} {difficulty}/>
{/if}
