<script>
	import { series, gêneros } from '$lib/serie.js';

	let gênerosSelecionados = $state([]);
	let filtrados = $state(series.slice());
	let gênerosSelecionados = writable([]);
	let tituloFiltro = writable('');
	let filtrados = writable(series);

	function filtrarGenero(event) {
		gênerosSelecionados.update((generos) => {
			if (event.target.checked) {
				generos.push(event.target.value);
			} else {
				generos = generos.filter((g) => g !== event.target.value);
			}
			atualizarFiltrados();
			return generos;
		});
	}

	function filtrarTitulo(event) {
		tituloFiltro.set(event.target.value.toLowerCase());
		atualizarFiltrados();
	}

	function atualizarFiltrados() {
		const filtroTitulo = $tituloFiltro;
		const generos = $gênerosSelecionados;

		filtrados.set(
			series.filter(
				(serie) =>
					(generos.length === 0 || generos.some((g) => series.gêneros.includes(g))) &&
					(filtroTitulo === '' || series.título.toLowerCase().includes(filtroTitulo))
			)
		);
	}

	function filtrarGenero(event) {
		if (event.target.checked) {
			gênerosSelecionados.push(event.target.value);
		} else {
			gênerosSelecionados.splice(gênerosSelecionados.indexOf(event.target.value), 1);
		}

		if (gênerosSelecionados.length == 0) {
			filtrados = series.slice();
		} else {
			filtrados = [];
			for (const series of series) {
				for (const gênero of gênerosSelecionados) {
					if (filme.gêneros.includes(gênero)) {
						filtrados.push(series);
						break;
					}
				}
			}
		}
	}
</script>

<div class="row align-items-center mb-3">
	<div class="col-md-4"><input class="form-control" placeholder="Filtrar..." /></div>
	{#each gêneros as gênero}
		<div class="col">
			<div class="form-check form-check-inline">
				<input
					type="checkbox"
					oninput={filtrarGenero}
					class="form-check-input"
					id={gênero}
					value={gênero}
				/>
				<label class="form-check-label" for={gênero}>{gênero}</label>
			</div>
		</div>
	{/each}
</div>
<div class="row g-4">
	{#each filtrados as series}
		<div class="col-md-6 col-xl-3">
			<div class="card h-100">
				<div class="row g-0">
					<div class="col-3 col-sm-4">
						<img src={series.imagem} class="img-fluid rounded-start" alt="capa do filme" />
					</div>
					<div class="col-sm-8">
						<div class="card-body">
							<h5 class="card-title">{series.título}</h5>
							<h6 class="card-subtitle mb-2 text-body-secondary">{series.ano}</h6>
							<p class="card-text">{series.sinopse}</p>
							<p class="card-text">
								{#each series.gêneros as gênero}
									<span class="badge text-bg-secondary mx-1">{gênero}</span>
								{/each}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
