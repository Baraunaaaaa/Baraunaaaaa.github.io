<script>
	import { series, generos } from '$lib/serie.js';
	let gênerosSelecionados = $state([]);
	let filtrados = $state(series.slice());
	let filtroTitulo = $state("");

	function filtrarGenero(event) {
		if (event.target.checked) {
			gênerosSelecionados.push(event.target.value);
		} else {
			gênerosSelecionados.splice(gênerosSelecionados.indexOf(event.target.value), 1);
		}
		aplicarFiltros();
	}

	function filtrarTitulo(event) {
		filtroTitulo = event.target.value.toLowerCase();
		aplicarFiltros();
	}

	function aplicarFiltros() {
		filtrados = series.filter(serie => {
			const correspondeTitulo = serie.título.toLowerCase().includes(filtroTitulo);
			const correspondeGenero = gênerosSelecionados.length === 0 ||
				gênerosSelecionados.some(genero => serie.generos.includes(genero));
			return correspondeTitulo && correspondeGenero;
		});
	}
</script>



<div class="row align-items-center mb-3">
	<div class="col-md-4">
		<input class="form-control" placeholder="Filtrar..." oninput={filtrarTitulo} />
	</div>
	{#each generos as genero}
		<div class="col">
			<div class="form-check form-check-inline">
				<input type="checkbox" oninput={filtrarGenero} class="form-check-input" id={genero} value={genero} />
				<label class="form-check-label" for={genero}>{genero}</label>
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
						<img src={series.imagem} class="img-fluid rounded-start" alt="capa da serie" />
					</div>
					<div class="col-sm-8">
						<div class="card-body">
							<h5 class="card-title">{series.título}</h5>
							<h6 class="card-subtitle mb-2 text-body-secondary">{series.ano}</h6>
							<p class="card-text">{series.sinopse}</p>
							<p class="card-text">
								{#each series.generos as genero}
									<span class="badge text-bg-secondary mx-1">{genero}</span>
								{/each}
							</p>
							<a href={series.referencia} target="_blank" class="btn btn-primary">Ver no iMDB</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
