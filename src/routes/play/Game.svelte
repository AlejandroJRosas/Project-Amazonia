<script lang="ts">
	import { onMount } from 'svelte'
	import type { Card as CardType } from '$lib/types/card'
	import { shuffle } from '$lib/shuffle-array'
	import CardModal from './CardModal.svelte'
	import { type Difficulty, type PlayersQuantity } from '$lib/types/game-settings'
	import type { PlayerGameInfo } from './game-components/PlayerCard'
	import Card from './Card.svelte'
	import PlayerCard from './game-components/PlayerCard.svelte'
	import MagicText from '$lib/components/MagicText.svelte'

	export let players: PlayerGameInfo[]
	export let cards: CardType[]
	export let playerQuantity: PlayersQuantity
	export let difficulty: Difficulty

	let amountOfTime = 700
	let selectedCard: CardType | null = null
	let comparisonCardIndex: number | null = null
	let secondCardIndex: number | null = null
	let playerTurn = 0
	let openedModal = false
	let cardCounter: number = 0
	let rounds: number = 1

	let isDisabled: boolean = false
	let isAlreadyGameLoaded = false
	let isGamePlayable = false
	let isGameStarted = false

	async function toggleCard(cardIndex: number) {
		if (!isGamePlayable) return

		if (cards[cardIndex].isActive) {
			selectedCard = cards[cardIndex]
			openModal()
			return
		}

		cards[cardIndex].isActive = true
    await new Promise((res) => setTimeout(res, amountOfTime))

		compareCard(cardIndex)
	}

	function startGameReadyToPlay() {
		isGamePlayable = true
	}

	// Postcarga
	function startGame() {
		isGameStarted = true
		for (let i = 0; i < cards.length; i++) {
			cards[i].isActive = true
		}
		for (let i = 0; i < cards.length; i++) {
			setTimeout(
				() => {
					cards[i].isActive = false
					if (i >= cards.length - 1) {
						// Esta es la ultima carta :)
						startGameReadyToPlay()
					}
				},
				2000 + i * 25
			)
		}
	}

	function cardIsLoaded(cardIndex: number) {
		if (cards[cardIndex].isLoaded) {
			return
		}

		cards[cardIndex].isLoaded = true
		const isAllCardsLoaded = cards.every((card) => card.isLoaded)
		if (isAllCardsLoaded && !isAlreadyGameLoaded) {
			isAlreadyGameLoaded = true
		}
	}

	function isSelected(cardIndex: number): boolean {
		if (comparisonCardIndex !== null && cards[cardIndex].id === cards[comparisonCardIndex].id) {
			return true
		}
		if (secondCardIndex !== null && cards[cardIndex].id === cards[secondCardIndex].id) {
			return true
		}

		return false
	}

	async function compareCard(touchedCardIndex: number) {
		// Cuando no hay carta de comparación
		if (comparisonCardIndex === null) {
			comparisonCardIndex = touchedCardIndex
			return
		}
		// Cuando hay carta de comparación
		// border-purple-600
		// bg-purple-600
		secondCardIndex = touchedCardIndex
		isDisabled = true
		if (cards[comparisonCardIndex].id === cards[touchedCardIndex].id) {
			await new Promise((res) => setTimeout(res, amountOfTime))
			cardCounter = cardCounter + 2
			players[playerTurn].points++
			let aux = players[playerTurn].color
      cards[touchedCardIndex].playerPointColor = cards[comparisonCardIndex].playerPointColor = players[playerTurn].color
      cards[touchedCardIndex].playerPointRound = cards[comparisonCardIndex].playerPointRound = rounds
			for (let i = 0; i < 6; i++) {
				setTimeout(() => {
					if (players[playerTurn].color === aux) {
						players[playerTurn].color = 'purple-600'
					} else {
						players[playerTurn].color = aux
					}
				}, i * 300)
			}

			// await new Promise((res) => setTimeout(res, amountOfTime))
			if (cardCounter === cards.length) {
				// abrir modal de fin de juego
				location.reload()
				return
			}
			comparisonCardIndex = secondCardIndex = null
			// await new Promise((res) => setTimeout(res, amountOfTime))
		} else {
			isDisabled = true
			await new Promise((res) => setTimeout(res, amountOfTime + 500))
			cards[comparisonCardIndex as number].isActive = cards[touchedCardIndex].isActive = false
			comparisonCardIndex = secondCardIndex = null
			await new Promise((res) => setTimeout(res, amountOfTime - 200))
			if (playerTurn === playerQuantity - 1) {
				playerTurn = 0
				rounds++
			} else {
				playerTurn++
			}
		}

		isDisabled = false
	}

	function openModal() {
		openedModal = true
	}

	function getGridCols(): string {
		if (difficulty === 'easy') {
			return '4'
		}
		if (difficulty === 'medium') {
			return '5'
		}
		if (difficulty === 'hard') {
			return '6'
		}
		return '4'
	}

	function getBackgroundColor(player: number): string {
		return 'bg-' + players[player].color
	}

	function getBorderColor(player: number): string {
		return 'border-' + players[player].color
	}
	// Precarga
	onMount(() => {
		if (cards.length <= 18) {
			cards = [...cards, ...structuredClone(cards)]
		}
		cards = shuffle(cards)
	})
</script>

{#if selectedCard}
	<CardModal bind:opened={openedModal} card={selectedCard} />
{/if}

<div class="flex h-full w-full flex-col items-center justify-stretch gap-5 pt-4">
	<ul class="grid h-[15%] w-full grid-cols-3">
		<!-- Player 1 -->
		<PlayerCard player={players[0]} />

		<!-- Insertar boton de pausa? -->
		{#key players[playerTurn].color}
			<div class="flex flex-col items-center justify-around">
				<button
					class={'mx-auto aspect-square h-12 rotate-45 rounded-lg border-4 ' +
						getBackgroundColor(playerTurn)}
				>
					<p class="-rotate-45 font-bold text-white">||</p>
				</button>
				{#if !isGameStarted}
					<div
						class="flex h-auto w-[80%] flex-col items-center rounded-lg border-2 border-red-500"
					>
						<button on:click={() => startGame()} class="aspect-square h-12 font-extrabold">
							<MagicText>
								<span class="">Iniciar Juego</span>
							</MagicText>
						</button>
					</div>
				{:else}
					<div
						class={'flex h-auto w-[80%] flex-col items-center rounded-lg border-2 leading-none ' +
							getBorderColor(playerTurn)}
					>
						<h2 class="text-[10px] uppercase">Ronda: {rounds}</h2>
						<div class="justify- flex w-full flex-row items-center justify-around">
							<div
								class={'aspect-square h-2 rounded-sm ' +
									(comparisonCardIndex !== null ? getBackgroundColor(playerTurn) : 'bg-black')}
							/>
							<h3 class="text-sm font-bold uppercase italic">Turno</h3>
							<div
								class={'aspect-square h-2 rounded-sm ' +
									(secondCardIndex ? getBackgroundColor(playerTurn) : 'bg-black')}
							/>
						</div>
						<h4 class="text-sm">{players[playerTurn].name}</h4>
					</div>
				{/if}
			</div>
		{/key}
		<!--  -->

		<!-- Player 2 -->
		{#if playerQuantity >= 2}
			<PlayerCard player={players[1]} />
		{:else}
			<div />
		{/if}
	</ul>

	<!-- grid-cols-4 grid-cols-5 grid-cols-6 -->
	<!-- // ---------------------------------------- -->
	{#key players[playerTurn].color}
  {#key comparisonCardIndex}
  {#key secondCardIndex}
		<div
			class={'mx-auto mt-2 grid h-[60%] w-[93%] rounded-lg border-4 bg-slate-400 ' +
				getBorderColor(playerTurn) +
				' grid-cols-' +
				getGridCols()}
		>
			{#each cards as card, index}
      <!-- isSelected={() => isSelected(index)}  -->
				<Card
					borderColor={() => getBorderColor(playerTurn)}
          isSelected={() => isSelected(index)}
					{card}
					{isDisabled}
					toggleCard={() => toggleCard(index)}
					cardIsLoaded={() => cardIsLoaded(index)}
					showing={cards[index].isActive}
				/>
			{/each}
		</div>
  {/key}
  {/key}
	{/key}

	<ul class="grid h-[15%] w-full grid-cols-3">
		<!-- Player 3 -->
		{#if playerQuantity >= 3}
			<PlayerCard player={players[2]} />
		{:else}
			<div />
		{/if}

		{#key players[playerTurn].color}
			<div
				class={'mx-auto flex h-24 w-[90%] flex-col items-center justify-around rounded-lg border-2 ' +
					getBorderColor(playerTurn)}
			>
				<p class="text-center text-xs">Para más información sobre las cartas</p>
				<MagicText>
					<p class="text-sm font-semibold uppercase">¡Tócala!</p>
				</MagicText>
			</div>
		{/key}

		<!-- Player 4 -->
		{#if playerQuantity >= 4}
			<PlayerCard player={players[3]} />
		{:else}
			<div />
		{/if}
	</ul>
</div>
