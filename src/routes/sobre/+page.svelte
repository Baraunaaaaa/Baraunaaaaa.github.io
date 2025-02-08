<script>
	let curiosidades = [
		{
			serie: 'The Bear',
			curiosidade:
				'O ator Jeremy Allen White, que interpreta Carmy, foi indicado ao Globo de Ouro por sua performance em The Bear.',
			imagem:
				'https://m.media-amazon.com/images/M/MV5BYjA2MzUyY2EtMTBmZC00MmNmLWFkNTMtMjlhY2M2ZTMzNzY0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
		},
		{
			serie: 'The Office',
			curiosidade:
				'Steve Carell quase não aceitou o papel de Michael Scott por receio de ser mal interpretado pelos fãs da versão britânica.',
			imagem:
				'https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_.jpghttps://upload.wikimedia.org/wikipedia/commons/8/8d/The_Office_Logo.png'
		},
		{
			serie: 'Brooklyn Nine-Nine ',
			curiosidade:
				"A famosa frase 'No doubt, no doubt, no doubt' de Jake Peralta foi improvisada por Andy Samberg.",
			imagem:
				'https://m.media-amazon.com/images/M/MV5BNzBiODQxZTUtNjc0MC00Yzc1LThmYTMtN2YwYTU3NjgxMmI4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
		},
		{
			serie: 'Dexter',
			curiosidade:
				"O personagem Dexter Morgan é baseado no livro 'Darkly Dreaming Dexter', de Jeff Lindsay, mas a série tomou muitas liberdades criativas.",
			imagem:
				'https://m.media-amazon.com/images/M/MV5BMTQ3YmQ4YzMtOTkyZC00YmM5LThhZjEtM2E0MjFkNTc0OGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
		},
		{
			serie: 'Arcane',
			curiosidade:
				'Arcane é a primeira série de animação produzida pela Riot Games, criadora do famoso jogo League of Legends.',
			imagem:
				'https://sm.ign.com/ign_pt/image/a/arcane-sea/arcane-season-1-gets-4k-blu-ray-release-in-rare-move-for-a-n_xdu3.jpg'
		}
	];
</script>

<nav class="navbar navbar-expand-lg custom-navbar">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Barauna Series</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/favoritos">Favoritos</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/sobre">Sobre</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
<h1 class="texto">Algumas curiosidades sobre as minhas séries favoritas</h1>
<main>
	<div>
		<div class="series-container"></div>
		{#each curiosidades as { serie, curiosidade, imagem }}
			<div class="card">
				<h2>{serie}</h2>
				<img src={imagem} alt={serie} class="imagem" />
				<p>{curiosidade}</p>
			</div>
		{/each}
	</div>
</main>
<a href="/" class="btn-voltar">Voltar para Home</a>

<style>
	.custom-navbar {
		background-color: #8a66fd;
	}

	.custom-navbar .navbar-brand {
		color: #ffffdf;
		font-weight: bold;
	}

	.custom-navbar .navbar-toggler-icon {
		background-color: #ffffdf;
	}

	.custom-navbar .nav-link {
		color: #ffffdf;
	}

	.custom-navbar .nav-link:hover {
		color: #8a66fd;
		background-color: #ffffdf;
	}

	.custom-navbar .navbar-toggler {
		border-color: #ffffdf;
	}
	.series-container {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		padding: 20px;
		justify-content: center;
	}

	.card {
		background-color: #282c34;
		color: white;
		border-radius: 10px;
		padding: 10px;
		text-align: center;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
		flex: 1 1 calc(25% - 20px);
		min-width: 200px;
		box-sizing: border-box;
	}

	.card .imagem {
		width: 100%;
		height: 180px;
		object-fit: contain;
		border-radius: 10px;
		margin-bottom: 10px;
	}

	.texto {
		font-family: 'Maldives', sans-serif;
		color: #8a66f6;
		text-align: center;
	}

	.btn-voltar {
		display: inline-block;
		margin: 20px;
		padding: 10px 15px;
		background-color: #8a66fd;
		color: white;
		text-decoration: none;
		border-radius: 5px;
	}

	.btn-voltar:hover {
		background-color: #6f4ec6;
		font-family: 'Maldives', sans-serif;
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		padding: 20px;
		justify-content: center;
	}

	.texto {
		margin-bottom: 8px;
		font-family: 'Maldives', sans-serif;
		color: #8a66f6;
		text-align: center;
	}
	h1{
        margin-bottom: 8px;
		font-family: 'Maldives', sans-serif;
		color: #8a66f6;
		text-align: center;
    }
	h2 {
		margin-bottom: 8px;
		font-family: 'Maldives', sans-serif;
		color: #8a66f6;
		text-align: center;
	}

	p {
		color: #ffffdf;
	}
</style>
