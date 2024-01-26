<script lang="ts">
	import { fade } from 'svelte/transition'
</script>

<div
	transition:fade
	role="progressbar"
	class="fixed left-0 top-0 z-50 h-screen w-screen bg-black bg-opacity-75"
>
	<div class="bright flex h-full w-full items-center justify-center gap-3">
		<div class="yellow-bright">
			<div class="hive yellow-hive bright bg-ucab-yellow aspect-[65/220] w-[58px]"></div>
		</div>
		<div class="blue-bright">
			<div class="hive blue-hive bg-ucab-blue aspect-[65/220] w-[58px]"></div>
		</div>
		<div class="green-bright">
			<div class="hive green-hive bg-ucab-green aspect-[65/220] w-[58px]"></div>
		</div>
	</div>
</div>

<style>
	.hive {
		clip-path: polygon(
			55% 0%,
			55% 10%,
			100% 25%,
			100% 75%,
			55% 90%,
			55% 100%,
			45% 100%,
			45% 90%,
			0% 75%,
			0% 25%,
			45% 10%,
			45% 0%
		);
		opacity: 30%;
		scale: 0.95;
	}

	.yellow-hive {
		animation:
			2s fade infinite,
			2s bounce infinite;
	}

	.blue-hive {
		animation:
			2s fade 0.66s infinite,
			2s bounce 0.66s infinite;
	}

	.green-hive {
		animation:
			2s fade 1.32s infinite,
			2s bounce 1.32s infinite;
	}

	.yellow-bright {
		--color: #ffc526;
		animation: 2s bright infinite;
	}

	.blue-bright {
		--color: #40b4e5;
		animation: 2s bright 0.66s infinite;
	}

	.green-bright {
		--color: #047732;
		animation: 2s bright 1.32s infinite;
	}

	@keyframes fade {
		0% {
			opacity: 30%;
		}
		37.5% {
			opacity: 100%;
		}
		75% {
			opacity: 30%;
		}
	}

	@keyframes bounce {
		0% {
			scale: 0.95;
		}
		37.5% {
			scale: 1.1;
		}
		75% {
			scale: 0.95;
		}
	}

	@keyframes bright {
		0% {
			filter: drop-shadow(0px 0px 0px var(--color));
		}
		37.5% {
			filter: drop-shadow(0px 0px 50px var(--color));
		}
		75% {
			filter: drop-shadow(0px 0px 0px var(--color));
		}
	}
</style>
