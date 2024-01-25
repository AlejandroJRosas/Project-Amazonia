<script lang="ts">
	import { onMount } from 'svelte'
	import type { Card as CardType } from '$lib/types/card'
	import { playerColors, type PlayersQuantity } from '$lib/types/game-settings'
	import { shuffle } from '$lib/shuffle-array'
	import CardModal from './CardModal.svelte'
	import { fade, fly, scale } from 'svelte/transition'
	import Card from './Card.svelte'

	export let cards: CardType[]
	export let playerQuantity: PlayersQuantity
	let selectedCard: CardType | null = null

	let comparisonCardIndex: number | null
	let playerTurn = 0
	let playerPoints: number[] = [0, 0, 0, 0]
	let openedModal = false

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

	onMount(() => {
		if (cards.length <= 12) {
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
						playerColors[1]}
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsz2YJmA7kktcvpTTHXTIiqOZFvbTh9KHXw&usqp=CAU"
					alt="player1"
				/>
				<p class="text-center">Jugador 1</p>
				<p class="text-center">Loro</p>
			</div>
		</div>

		<!-- Insertar boton de pausa? -->
		<button class="mx-auto aspect-square h-12 rotate-45 rounded-lg border-4 bg-purple-600">
			<p class="-rotate-45 font-bold text-white">||</p>
		</button>
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

	<div
		class={'mx-auto mt-2 grid h-[60%] w-[93%] grid-cols-4 rounded-lg border-4 ' + playerColors[0]}
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
