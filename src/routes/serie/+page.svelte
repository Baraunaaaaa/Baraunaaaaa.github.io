<a href="/minhaop"</a>





<script>
  import { writable } from 'data.js';
  let activeTab = writable(0);
  let opinions = writable("");
  let publicOpinions = writable([]);
  let myOpinion = writable("");
</script>

<style>
  .tabs { display: flex; gap: 10px; cursor: pointer; padding: 10px; }
  .tab-content { padding: 20px; }
  button { margin-top: 10px; }
</style>

<div class="tabs">
  <div on:click={() => activeTab.set(0)}>Séries</div>
  <div on:click={() => activeTab.set(1)}>Opiniões do Público</div>
  <div on:click={() => activeTab.set(2)}>Minha Opinião</div>
</div>

{#if $activeTab === 0}
  <div class="tab-content">
    <h2>Lista de Séries</h2>
    {#each series as serie}
      <div>
        <a href={serie.imdb} target="_blank">{serie.name}</a>
      </div>
    {/each}
  </div>
{/if}

{#if $activeTab === 1}
  <div class="tab-content">
    <h2>Opiniões do Público</h2>
    <textarea bind:value={$opinions} placeholder="Escreva sua opinião aqui..."></textarea>
    <button on:click={() => { $publicOpinions = [...$publicOpinions, $opinions]; $opinions = ""; }}>Enviar Opinião</button>
  </div>
{/if}

{#if $activeTab === 2}
  <div class="tab-content">
    <h2>Minha Opinião</h2>
    <textarea bind:value={$myOpinion} placeholder="Escreva sua opinião pessoal..."></textarea>
  </div>
{/if}

{#if $activeTab === 3}
  <div class="tab-content">
    <h2>Todas Opiniões do Público</h2>
    {#each $publicOpinions as opinion}
      <p>{opinion}</p>
    {/each}
  </div>
{/if}

{#if $activeTab === 4}
  <div class="tab-content">
    <h2>Minha Opinião Detalhada</h2>
    <p>{ $myOpinion }</p>
  </div>
{/if}


