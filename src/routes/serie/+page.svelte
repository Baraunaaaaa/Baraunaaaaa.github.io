<script>
  let series = [
    {
      title: "Stranger Things",
      description: "Um grupo de crianças enfrenta fenômenos paranormais em sua cidade.",
      imdbLink: "https://www.imdb.com/title/tt4574334/"
    },
    {
      title: "Breaking Bad",
      description: "A história de Walter White, um professor de química que se torna traficante de drogas.",
      imdbLink: "https://www.imdb.com/title/tt0903747/"
    },
    {
      title: "The Mandalorian",
      description: "O Mandaloriano busca capturar uma misteriosa criatura no universo de Star Wars.",
      imdbLink: "https://www.imdb.com/title/tt7562112/"
    },
    {
      title: "Game of Thrones",
      description: "A disputa pelo Trono de Ferro no mundo de Westeros.",
      imdbLink: "https://www.imdb.com/title/tt0944947/"
    }
  ];
</script>

<main>
  <h1>Séries Famosas</h1>
  <ul>
    {#each series as serie}
      <li>
        <h2>{serie.title}</h2>
        <p>{serie.description}</p>
        <a href={serie.imdbLink} target="_blank">Ver no IMDb</a>
      </li>
    {/each}
  </ul>
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f4f4f4;
    color: #333;
  }

  h1 {
    color: #5a2e5b;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    background-color: white;
    margin: 10px 0;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  a {
    color: #0077cc;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
