<script>
	let seriesFavoritas = [
		{
			titulo: 'the bear',
			ano: '2022',
			descricao:
				'Carmen luta para transformar a lanchonete da familia e a si mesmo enquanto trabalha ao lado de uma equipe rude.',
			imagem:
				'https://m.media-amazon.com/images/M/MV5BYjA2MzUyY2EtMTBmZC00MmNmLWFkNTMtMjlhY2M2ZTMzNzY0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
		},
		{
			titulo: 'The Office',
			ano: '2005',
			descricao: 'Michael Scott lidera a equipe da Dunder Mifflin.',
			imagem:
				'https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_.jpg'
		},
		{
			titulo: 'Brooklyn Nine-Nine',
			descricao:
				'Uma série de comédia policial que acompanha as investigações de uma delegacia de Nova York.',
			imagem:
				'https://m.media-amazon.com/images/M/MV5BNzBiODQxZTUtNjc0MC00Yzc1LThmYTMtN2YwYTU3NjgxMmI4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
		},
		{
			titulo: 'Dexter',
			descricao:
				'Um analista forense da polícia que leva uma vida dupla como um serial killer de criminosos.',
			imagem:
				'https://m.media-amazon.com/images/M/MV5BMTQ3YmQ4YzMtOTkyZC00YmM5LThhZjEtM2E0MjFkNTc0OGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
		},
		{
			titulo: 'Arcane',
			descricao:
				'Uma animação baseada no universo de League of Legends, explorando a rivalidade entre Piltover e Zaun.',
			imagem:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbEFsHD0tqJOiy0Qo2_CUMVLoVqMZEclqXFQ&s'
		}
	];
</script>

<nav class="navbar navbar-expand-lg custom-navbar">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Barauna Séries</a>
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
<h1 class="texto"><p>Aqui selecionei minhas cinco séries favoritas do momento</p>
</h1>


<div class="series-container">
	{#each seriesFavoritas as serie}
		<div class="card">
			<img src={serie.imagem} alt={serie.titulo} />
			<h3>{serie.titulo}</h3>
			<p>{serie.descricao}</p>
		</div>
	{/each}
</div>
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
		padding: 15px;
		text-align: center;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
		width: 200px;
	}
	.card img {
		width: 100%; 
		height: 250px; 
		object-fit: cover; 
		border-radius: 10px;
	}
	.card h3 {
		margin-top: 10px;
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
</style>

