<script lang="ts">
	import type { Category, Difficulty } from '$lib/types/game-settings'
	import type { Card } from '$lib/types/card'
	import Game from './Game.svelte'
	import GameSettings from './GameSettings.svelte'
	import { getRandomCards } from '$lib/get-random-cards'
	import Loading from '$lib/components/Loading.svelte'
	import type { PlayerGameInfo } from './game-components/PlayerCard'

	let selectedCategories: Record<Category, boolean> = {
		wildlife: false,
		plants: false,
		locations: false
	}
	let difficulty: Difficulty | null = null
	let playerQuantity: 1 | 2 | 3 | 4 | null = null

	let currentScreen: 'settings' | 'game' = 'settings'

	let cards: Card[] = []
	let isGameLoading = false

	const AVATARS_URL = 'assets/avatars'
	let players: PlayerGameInfo[] = [
		{
			name: 'Guacamayo',
			icon: `${AVATARS_URL}/macaw.avif`,
			color: 'red-500',
			points: 0
		},
		{
			name: 'Águila',
			icon: `${AVATARS_URL}/eagle.avif`,
			color: 'blue-400',
			points: 0
		},
		{
			name: 'Perezoso',
			icon: `${AVATARS_URL}/sloth.avif`,
			color: 'purple-400',
			points: 0
		},
		{
			name: 'Rana',
			icon: `${AVATARS_URL}/frog.avif`,
			color: 'yellow-500',
			points: 0
		}
	]

	async function initGame() {
		if (!difficulty) return

		const categoriesSet = new Set(
			Object.keys(selectedCategories).filter((c) => !!selectedCategories[c as Category])
		) as Set<Category>

		isGameLoading = true
		cards = await preloadCards(categoriesSet, difficulty)
		isGameLoading = false
		currentScreen = 'game'
	}

	async function preloadCards(categories: Set<Category>, difficulty: Difficulty): Promise<Card[]> {
		const cardsToPreload = getRandomCards(categories, difficulty)
		const preloadPromises = cardsToPreload.map((card) => {
			return new Promise((resolve, reject) => {
				const image = new Image()
				image.src = card.imgSrc
				image.onload = () => resolve(card)
				image.onerror = () => reject(card)
			})
		})
		try {
			await Promise.all(preloadPromises)
			return cardsToPreload
		} catch (error) {
			console.error('Error preloading cards:', error)
			return []
		}
	}
</script>

{#if currentScreen === 'settings'}
	{#if isGameLoading}
		<Loading />
	{/if}
	<GameSettings
		bind:selectedCategories
		bind:difficulty
		bind:playersQuantity={playerQuantity}
		{initGame}
	/>
{:else if cards && playerQuantity && difficulty}
	<Game {cards} {players} {playerQuantity} {difficulty} />
{/if}
