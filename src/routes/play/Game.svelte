<script lang="ts">
	import { onMount } from 'svelte'
	import type { Card as CardType } from '$lib/types/card'
	import { playerColors, type Difficulty, type PlayersQuantity } from '$lib/types/game-settings'
	import { shuffle } from '$lib/shuffle-array'
	import CardModal from './CardModal.svelte'
	import { fly, scale } from 'svelte/transition'
	import Card from './Card.svelte'

	export let cards: CardType[]
	export let playerQuantity: PlayersQuantity
	export let difficulty: Difficulty
	let selectedCard: CardType | null = null

	let comparisonCardIndex: number | null
	let playerTurn = 0
	let playerPoints: number[] = [0, 0, 0, 0]
	let openedModal = false
	let cardCounter: number = 0

	function toggleCard(cardIndex: number) {
		if (cards[cardIndex].isActive) {
			selectedCard = cards[cardIndex]
			openModal()
			return
		}

		cards[cardIndex].isActive = true

		compareCard(cardIndex)
	}

	function compareCard(touchedCardIndex: number) {
		// Cuando no hay carta de comparación
		if (comparisonCardIndex === null) {
			comparisonCardIndex = touchedCardIndex
			return
		}
		// Cuando hay carta de comparación
		if (cards[comparisonCardIndex].id === cards[touchedCardIndex].id) {
			cardCounter = cardCounter + 2
			if (cardCounter === cards.length) {
				// abrir modal de fin de juego
				location.reload()
				return
			}
			playerPoints[playerTurn - 1]++
			comparisonCardIndex = null
		} else {
			setTimeout(() => {
				cards[comparisonCardIndex as number].isActive = false
				cards[touchedCardIndex].isActive = false
				comparisonCardIndex = null
			}, 1500)
		}

		if (playerTurn === playerQuantity) {
			playerTurn = 1
		} else {
			playerTurn++
		}
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
			return '4'
		}
		return '4'
	}

	onMount(() => {
		if (cards.length <= 18) {
			cards = [...cards, ...structuredClone(cards)]
		}
		cards = shuffle(cards)
		comparisonCardIndex = null
		playerTurn = 1
	})
</script>

{#if selectedCard}
	<CardModal bind:opened={openedModal} card={selectedCard} />
{/if}

<div class="flex h-full w-full flex-col items-center justify-stretch gap-5 pt-4">
	<ul class="grid h-[15%] w-full grid-cols-3">
		<div class="relative inline-block">
			{#key playerPoints[0]}
				<span
					transition:scale
					class="variant-filled-warning badge-icon absolute left-20 z-10 overflow-hidden bg-green-600 font-extrabold text-white"
				>
					<span
						in:fly={{ y: 100 }}
						out:fly={{ y: -100 }}
						class="absolute left-[50%] top-[45%] flex -translate-x-[50%] -translate-y-[50%] items-center text-center"
					>
						{playerPoints[0]}
					</span>
				</span>
			{/key}
			<div class="m-auto aspect-square w-[65%]">
				<img
					class={'h-full w-full rounded-full border-4 object-cover transition-all ' +
						'border' +
						playerColors[1]}
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsz2YJmA7kktcvpTTHXTIiqOZFvbTh9KHXw&usqp=CAU"
					alt="player1"
				/>
				<p class="text-center">Jugador 1</p>
				<p class="text-center">Loro</p>
			</div>
		</div>

		<!-- Insertar boton de pausa? -->
		<div class="flex flex-col items-center justify-between">
			<button
				class={'mx-auto aspect-square h-12 rotate-45 rounded-lg border-4 ' +
					'bg' +
					playerColors[playerTurn]}
			>
				<p class="-rotate-45 font-bold text-white">||</p>
			</button>
			<div
				class={'flex h-auto w-[80%] flex-col items-center rounded-lg border-2 ' +
					'border' +
					playerColors[playerTurn]}
			>
				<h3 class="font-bold uppercase italic">Turno</h3>
				<h4 class={'border' + playerColors[playerTurn]}>Jugador {playerTurn}</h4>
			</div>
		</div>
		<!--  -->

		<div class="relative inline-block">
			{#if playerQuantity >= 2}
				{#key playerPoints[1]}
					<span
						transition:scale
						class="variant-filled-warning badge-icon absolute left-6 z-10 overflow-hidden bg-blue-600 font-extrabold text-white"
					>
						<span
							in:fly={{ y: 100 }}
							out:fly={{ y: -100 }}
							class="absolute left-[50%] top-[45%] flex -translate-x-[50%] -translate-y-[50%] items-center text-center"
						>
							{playerPoints[1]}
						</span>
					</span>
				{/key}
			{/if}
			<div class="m-auto aspect-square w-[65%]">
				{#if playerQuantity >= 2}
					<img
						class={'h-full w-full rounded-full border-4 object-cover transition-all ' +
							'border' +
							'border' +
							(playerQuantity >= 2 ? playerColors[2] : `${playerColors[0]} opacity-50`)}
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3TKbS5u4ng_4e8gdxlD4FeX6TCYDd8syEylLal0tjmtw3obBu90NOpGnd6Q1alTojmM&usqp=CAU"
						alt="player2"
					/>
					<p class="text-center">Jugador 2</p>
					<p class="text-center">Jaguar</p>
				{/if}
			</div>
		</div>
	</ul>
	<!-- grid-cols-4 grid-cols-5 grid-cols-6 -->
	<div
		class={'mx-auto mt-2 grid h-[60%] w-[93%] rounded-lg border-4 ' +
			'border' +
			playerColors[0] +
			' grid-cols-' +
			getGridCols()}
	>
		{#each cards as card, index}
			<Card {card} toggleCard={() => toggleCard(index)} showing={cards[index].isActive} />
		{/each}
	</div>

	<ul class="grid h-[15%] w-full grid-cols-3">
		<div class="relative inline-block">
			{#if playerQuantity >= 3}
				{#key playerPoints[2]}
					<span
						transition:scale
						class="variant-filled-warning badge-icon absolute left-20 z-10 overflow-hidden bg-red-600 font-extrabold text-white"
					>
						<span
							in:fly={{ y: 100 }}
							out:fly={{ y: -100 }}
							class="absolute left-[50%] top-[45%] flex -translate-x-[50%] -translate-y-[50%] items-center text-center"
						>
							{playerPoints[2]}
						</span>
					</span>
				{/key}
			{/if}
			<div class="m-auto aspect-square w-[65%]">
				{#if playerQuantity >= 3}
					<img
						class={'h-full w-full rounded-full border-4 object-cover transition-all ' +
							'border' +
							(playerQuantity >= 3 ? playerColors[3] : `${playerColors[0]} opacity-50`)}
						src="https://images.ecestaticos.com/7xeAFMsSXGyJyC85ib0Ke-0oBIw=/0x0:2000x1296/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd9d%2Feec%2Fe8e%2Fd9deece8e45d39228451118a5af1fcf7.jpg"
						alt="player3"
					/>
					<p class="text-center">Jugador 3</p>
					<p class="text-center">Capibara</p>
				{/if}
			</div>
		</div>

		<div></div>

		<div class="relative inline-block">
			{#if playerQuantity >= 4}
				{#key playerPoints[3]}
					<span
						transition:scale
						class="variant-filled-warning badge-icon absolute left-6 z-10 overflow-hidden bg-yellow-600 font-extrabold text-white"
					>
						<span
							in:fly={{ y: 100 }}
							out:fly={{ y: -100 }}
							class="absolute left-[50%] top-[45%] flex -translate-x-[50%] -translate-y-[50%] items-center text-center"
						>
							{playerPoints[3]}
						</span>
					</span>
				{/key}
			{/if}
			<div class="m-auto aspect-square w-[65%]">
				{#if playerQuantity >= 4}
					<img
						class={'h-full w-full rounded-full border-4 object-cover transition-all ' +
							'border' +
							(playerQuantity >= 4 ? playerColors[4] : `${playerColors[0]} opacity-50`)}
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9jjGhmrjY-rEke71YfCvllYj_K0e_ZHibZg&usqp=CAU"
						alt="player4"
					/>
					<p class="text-center">Jugador 4</p>
					<p class="text-center">Rana</p>
				{/if}
			</div>
		</div>
	</ul>
</div>
