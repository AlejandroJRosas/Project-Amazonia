<script lang="ts">
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton'

	let playersQuantity = 1
</script>

<div class="flex flex-col gap-6 pt-6">
	<h1 class="h1 m-auto font-bold">Modo de juego</h1>

	<figure class="flex flex-col gap-3">
		<figcaption class="text-center">Categorías</figcaption>
		<ul class="grid w-full grid-cols-3">
			<li class="m-auto aspect-square w-[90%]">
				<img
					class="h-full w-full rounded-lg object-cover"
					src="https://cdn0.ecologiaverde.com/es/posts/5/8/2/capibara_hydrochaeris_hydrochaeris_2285_2_600.jpg"
					alt="Fauna"
				/>
				<p class="h5 text-center">Fauna</p>
			</li>
			<li class="m-auto aspect-square w-[90%]">
				<img
					class="h-full w-full rounded-lg object-cover"
					src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Flora_Amazonia.jpg"
					alt="Flora"
				/>
				<p class="h5 text-center">Flora</p>
			</li>
			<li class="m-auto aspect-square w-[90%]">
				<img
					class="h-full w-full rounded-lg object-cover"
					src="https://filminperu.peru.info/archivos/locacionGaleria/fip-locaciones-crucero_rio_amazonas-carrusel-001.jpg"
					alt="Locaciones"
				/>
				<p class="h5 text-center">Locaciones</p>
			</li>
		</ul>
	</figure>

	<figure class="mb-4 flex flex-col gap-3">
		<figcaption class="text-center">Dificultad</figcaption>
		<ul class="mx-auto flex gap-2">
			<button class="variant-filled-primary btn">Fácil</button>
			<button class="variant-filled-secondary btn">Medio</button>
			<button class="variant-filled-tertiary btn">Difícil</button>
		</ul>
	</figure>

	<figure class="flex flex-col gap-3">
		<figcaption class="text-center">Cantidad de jugadores</figcaption>
		<ListBox class="px-2">
			<ListBoxItem bind:group={playersQuantity} name="medium" value={1}>1 jugador</ListBoxItem>
			<ListBoxItem bind:group={playersQuantity} name="medium" value={2}>2 jugadores</ListBoxItem>
			<ListBoxItem bind:group={playersQuantity} name="medium" value={3}>3 jugadores</ListBoxItem>
			<ListBoxItem bind:group={playersQuantity} name="medium" value={4}>4 jugadores</ListBoxItem>
		</ListBox>
	</figure>

	<button class="variant-filled-success btn mx-2">Continuar</button>
</div>
