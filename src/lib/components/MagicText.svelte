<span class={"magic-text"}><slot /></span>

<style>
	:root {
		--ucab-blue: #40b4e5;
		--ucab-green: #047732;
	}

	@keyframes background-pan {
		from {
			background-position: 0% center;
		}

		to {
			background-position: -200% center;
		}
	}

	.magic-text {
		animation: background-pan 3s linear infinite;
		background: linear-gradient(to right, var(--ucab-green), var(--ucab-blue), var(--ucab-green));
		background-size: 200%;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		white-space: nowrap;
	}
</style>
