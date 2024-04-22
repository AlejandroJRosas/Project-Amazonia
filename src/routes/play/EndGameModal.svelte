<script lang="ts">
	import { fade, scale } from 'svelte/transition'
	import type { PlayerGameInfo } from './game-components/PlayerCard'
	import EndGamePlayerCard from './game-components/EndGamePlayerCard.svelte'
	import type { PlayersQuantity } from '$lib/types/game-settings'

	export let opened = true

  export let players: PlayerGameInfo[]
  export let playerQuantity: PlayersQuantity
  export let rounds: number

	function close() {
		opened = false
	}
</script>

{#if opened}
	<dialog open class="z-20 h-full w-full bg-black bg-opacity-60 ring-0" transition:fade>
    <div class="h-full w-full">
      <div
      in:scale
      class={"card mx-auto w-[85%] max-w-lg overflow-hidden rounded-lg variant-filled-secondary"}
			>
        <header class="p-2 text-center border-b border-[#298681]">
          <h1 class="font-bold text-2xl">Han conseguido todos los 
            pares!</h1>
				</header>
				<section class="space-y-4 p-4">
          {#each players as player, index}
            {#if index < playerQuantity}
              <EndGamePlayerCard player={player}/>
            {/if}
          {/each}
				</section>
				<footer class="flex flex-col text-center space-x-4 border-t border-[#298681] p-4">
          <h1 class="font-bold text-2xl">Cantidad de rondas: {rounds}</h1>
					<!-- <figure
						class="avatar text-surface-400-500-token flex aspect-square w-8 items-center justify-center overflow-hidden rounded-full bg-surface-50 font-semibold"
					>
						<img
							alt="category"
							src={categoryImages[card.category]}
							class="h-full w-full object-cover"
						/>
					</figure> -->
					<!-- <p class="text-left text-sm font-bold">
						{card.category === 'wildlife' ? 'Fauna' : ''}
						{card.category === 'plants' ? 'Flora' : ''}
						{card.category === 'locations' ? 'Locaciones' : ''}
					</p> -->
				</footer>
			</div>
    </div>
	</dialog>
{/if}
