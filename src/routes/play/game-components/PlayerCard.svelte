<script lang="ts">
	import { scale, fly } from 'svelte/transition'
	import type { PlayerGameInfo } from './PlayerCard'

	export let player: PlayerGameInfo
</script>

<div class="relative inline-block">
	{#key player.points}
		<span
			transition:scale
			class={'variant-filled-warning badge-icon absolute -top-2 left-[2.875rem] z-10 w-10 overflow-hidden ' +
				'bg-' +
				player.color}
		>
			<span
				in:fly={{ y: 100 }}
				out:fly={{ y: -100 }}
				class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-medium text-white"
			>
				{player.points}
			</span>
		</span>
	{/key}
	<div class="m-auto aspect-square w-2/3">
		<img
			class={'h-full w-full rounded-full border-4 object-cover transition-all ' +
				'border-' +
				player.color}
			src={player.icon}
			alt={player.name}
		/>
		<p class="text-center">{player.name}</p>
	</div>
</div>
