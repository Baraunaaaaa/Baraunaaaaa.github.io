<script>
    import { series, generos } from '$lib/serie.js';
  
    let generosSelecionados = $state([]);
    let filtrados = $state(series.slice());
    let pesquisa = $state(''); 
  
    function filtrarGenero(event) {
        if (event.target.checked) {
            generosSelecionados.push(event.target.value);
        } else {
            generosSelecionados.splice(generosSelecionados.indexOf(event.target.value), 1);
        }
  
        atualizarFiltrados();
    }
  
    function atualizarFiltrados() {
        filtrados = series.filter(series => {
            const matchGenero = generosSelecionados.length === 0 || series.generos.some(g => generosSelecionados.includes(g));
            const matchPesquisa = series.titulo.toLowerCase().includes(pesquisa.toLowerCase()); 
            return matchGenero && matchPesquisa;
        });
    }
  
    function atualizarPesquisa(event) {
        pesquisa = event.target.value;
        atualizarFiltrados();
    }
  </script>
  
  <div class="row align-items-center mb-3">
    <div class="col"><input oninput={atualizarPesquisa} class="form-control" placeholder="Filtrar..." /></div>
    {#each generos as generos}
        <div class="col">
            <div class="form-check form-check-inline">
                <input oninput={filtrarGenero} class="form-check-input" type="checkbox" id={generos} value={generos} />
                <label class="form-check-label" for={generos}>{generos}</label>
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
                            <h5 class="card-title">{series.titulo}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">{series.ano}</h6>
                            <p class="card-text">{series.sinopse}</p>
                            <p class="card-text">
                                {#each series.generos as generos}
                                    <span class="badge text-bg-secondary mx-1">{generos}</span>
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
  
  