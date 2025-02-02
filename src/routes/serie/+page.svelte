<script>
  import { writable } from 'svelte/store';
  let activeTab = writable(0);

  const series = [
    { name: "The Bear", imdb: "https://www.imdb.com/title/tt14452776/" },
    { name: "The Office", imdb: "https://www.imdb.com/title/tt0386676/" },
    { name: "Brooklyn Nine-Nine", imdb: "https://www.imdb.com/title/tt2467372/" },
    { name: "Black Bird", imdb: "https://www.imdb.com/title/tt4301160/" },
    { name: "Stranger Things", imdb: "https://www.imdb.com/title/tt4574334/" },
    { name: "Dexter", imdb: "https://www.imdb.com/title/tt0773262/" },
    { name: "Sex and the City", imdb: "https://www.imdb.com/title/tt0159206/" }
  ];

  let opinions = writable("");
  let publicOpinions = writable([]);
  let myOpinion = writable("");
</script>

<style>
  .tabs { display: flex; gap: 10px; cursor: pointer; padding: 10px; }
  .tab-content { padding: 20px; }
  button { margin-top: 10px; }
</style>
