<script lang="ts">
	import { onMount } from 'svelte'
	import type { Card } from '$lib/types/card'
	import { playerColors, type PlayersQuantity } from '$lib/types/game-settings'
	import { shuffle } from '$lib/shuffle-array'
	import CardModal from './CardModal.svelte'

	export let cards: Card[]
	export let playerQuantity: PlayersQuantity

	let comparisonCardIndex: number | null
	let playerTurn = 0
	let playerPoints: number[] = []
	let openedModal = false

	function toggleCard(cardIndex: number) {
		if (cards[cardIndex].isActive) {
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
		cards = [...cards, ...structuredClone(cards)]
		cards = shuffle(cards)
		comparisonCardIndex = null
		playerTurn = 1
		for (let i = 0; i < playerQuantity; i++) {
			playerPoints.push(0)
		}
	})
</script>

<CardModal bind:opened={openedModal} />

<div class="flex flex-col items-center gap-2 pt-6">
	<div class="flex flex-col gap-3">
		<ul class="grid w-full grid-cols-3">
			<div class="flex flex-row">
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
				<p>{playerPoints[0] ?? '0'}</p>
			</div>

			<!-- Insertar boton de pausa? -->
			<div></div>
			<!--  -->

			<div class="flex flex-row">
				{#if playerQuantity >= 2}
					<p>{playerPoints[1] ?? '0'}</p>
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
	</div>

	<div
		class={'mx-auto grid h-auto w-[95%] grid-cols-4 rounded-lg border-4 py-2 ' +
			playerColors[playerTurn]}
	>
		{#each cards as card, index}
			<button on:click={() => toggleCard(index)} class="m-1 aspect-square w-[95%] items-center">
				{#if card.isActive}
					<img
						class="h-full w-full rounded-lg border-4 border-blue-600 object-cover transition-all"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3TKbS5u4ng_4e8gdxlD4FeX6TCYDd8syEylLal0tjmtw3obBu90NOpGnd6Q1alTojmM&usqp=CAU"
						alt={card.name}
					/>
				{:else}
					<div class="h-full w-full rounded-lg border-4 border-blue-600 bg-slate-600">
						{card.id}
					</div>
				{/if}
			</button>
		{/each}
	</div>

	<div class="flex flex-col gap-3">
		<ul class="grid w-full grid-cols-3">
			<div class="flex flex-row">
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
				{#if playerQuantity >= 3}
					<p>{playerPoints[2] ?? '0'}</p>
				{/if}
			</div>

			<div></div>

			<div class="flex flex-row">
				{#if playerQuantity >= 4}
					<p>{playerPoints[3] ?? '0'}</p>
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
</div>
