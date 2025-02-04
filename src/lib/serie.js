
export const generos = ['Animação', 'Comédia', 'Drama', 'Terror', 'Sitcom', 'Romance', 'Suspense', 'Thriller'];

export const series = [
  { titulo: "The Bear", ano: "2022", generos: ["Comédia", "Drama"], sinopse: "Carmy luta para transformar a lanchonete da família.", imagem: "https://upload.wikimedia.org/wikipedia/id/thumb/7/74/The_Bear_2022_FX.png/220px-The_Bear_2022_FX.png", referencia: "https://www.imdb.com/pt/title/tt14452776/" },
  { titulo: "The Office", ano: "2005", generos: ["Comédia", "Sitcom"], sinopse: "Michael Scott lidera a equipe da Dunder Mifflin.", imagem: "https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_.jpg", referencia: "https://www.imdb.com/pt/title/tt0386676/" },
  { titulo: "Brooklyn Nine-Nine", ano: "2013", generos: ["Comédia", "Sitcom", "Família"], sinopse: "Jake Peralta é um detetive brilhante e ao mesmo tempo imaturo, que nunca precisou se preocupar em respeitar as regras. Tudo muda quando um capitão exigente assume o comando de seu esquadrão e Jake deve aprender a trabalhar em equipe.", imagem: "https://m.media-amazon.com/images/M/MV5BNzBiODQxZTUtNjc0MC00Yzc1LThmYTMtN2YwYTU3NjgxMmI4XkEyXkFqcGc@._V1_.jpg", referencia: "https://www.imdb.com/pt/title/tt2467372/" },
  { titulo: "Black Bird", ano: "2022", generos: ["Drama", "Suspense"], sinopse: "Jimmy Keene começa a cumprir uma sentença de 10 anos de prisão e recebe uma oferta incrível: se ele conseguir obter uma confissão do suspeito de matar Larry Hall, será libertado. Com isso, completar esta missão torna-se o desafio de uma vida", imagem: "https://m.media-amazon.com/images/M/MV5BNDIzMzRlZjMtN2IyZC00M2M5LWFkNTYtMDQyMTAwZTE2YzY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", referencia: "https://www.imdb.com/pt/title/tt4301160/" },
  { titulo: "Sex and the city", ano: "1998", generos: ["Drama"], sinopse: "A colunista Carrie Bradshaw e as amigas Samantha, Charlotte e Miranda exploram os altos e baixos do mundo dos solteiros em Nova York. Aos trinta e poucos anos de idade, elas são bonitas, bem-sucedidas e, principalmente, unidas por uma grande amizade.", imagem: "https://m.media-amazon.com/images/M/MV5BNjMwNzczODYtZDQwZC00NjJmLTg5ZWYtYzUxZjViYmNhN2IyXkEyXkFqcGc@._V1_.jpg", referencia: "https://www.imdb.com/pt/title/tt0159206/" },
  { titulo: "Dexter", ano: "2006", generos: ["Drama", "Suspense"], sinopse: "Dexter é um especialista forense que também é um serial killer.", imagem: "https://m.media-amazon.com/images/M/MV5BMTQ3YmQ4YzMtOTkyZC00YmM5LThhZjEtM2E0MjFkNTc0OGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", referencia: "https://www.imdb.com/pt/title/tt0773262/" },
  { titulo: "Stranger Things", ano: "2016", generos: ["Terror", "Suspense", "Drama"], sinopse: "Um grupo de amigos se envolve em uma série de eventos sobrenaturais na pacata cidade de Hawkins. Eles enfrentam criaturas monstruosas, agências secretas do governo e se aventuram em dimensões paralelas.", imagem: "https://m.media-amazon.com/images/M/MV5BMjg2NmM0MTEtYWY2Yy00NmFlLTllNTMtMjVkZjEwMGVlNzdjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", referencia: "https://www.imdb.com/pt/title/tt4574334/" },
  { titulo: "O Verão que Mudou Minha Vida", ano: "2022", generos: ["Romance"], sinopse: "Uma garota é pega em um triângulo amoroso entre dois irmãos. Ela acaba lidando com seu primeiro amor e seu primeiro desgosto durante o verão perfeito.", imagem: "https://m.media-amazon.com/images/M/MV5BMjY1NDA1YTItMDAxYi00ODcwLWE0MTktMDJhZmJhYjk0MDRjXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg", referencia: "https://www.imdb.com/pt/title/tt14016500/" },
  { titulo: "Ruptura", ano: "2022", generos: ["Suspense", "Drama", "Thriller"], sinopse: "Mark lidera uma equipe de funcionários cujas memórias foram cirurgicamente divididas entre vida profissional e pessoal. Quando um colega misterioso aparece fora do ambiente trabalho, ele começa uma jornada para descobrir a verdade sobre seu emprego", imagem: "https://m.media-amazon.com/images/M/MV5BNDQxNTQ4NGUtMDMwNS00ZjhhLWJjNTYtZDYyYzZkMmUwNjVlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", referencia: "https://www.imdb.com/pt/title/tt11280740/" },
  { titulo: "Arcane", ano: "2021", generos: ["Drama", "Animação"], sinopse: "Em meio ao conflito entre as cidades-gêmeas de Piltover e Zaun, duas irmãs lutam em lados opostos de uma guerra entre tecnologias mágicas e convicções incompatíveis.", imagem: "https://m.media-amazon.com/images/M/MV5BOWJhYjdjNWEtMWFmNC00ZjNkLThlZGEtN2NkM2U3NTVmMjZkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", referencia: "https://www.imdb.com/pt/title/tt11126994/" },
];

export function filtrarPorGenero(genero) {
  return series.filter(serie => serie.generos.includes(genero));
}

export function buscarPorTitulo(titulo) {
  return series.find(serie => serie.titulo.toLowerCase().includes(titulo.toLowerCase()));
}

export function listarTodosGeneros() {
  return generos;
}

export function listarTodasSeries() {
  return series;
}