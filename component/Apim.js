import { mainModule } from "process";

export function Apim() {

    const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
    // API img
    const API_IMG = 'https://image.tmdb.org/t/p/w1280'
    // Search
    //const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=3fd2be6f0c'
    //'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

    
    getMovies(API_URL);
    
    async function getMovies(url){
        const res = await fetch(url)
        const data = await res.json();
        showMovies(data.results)
    }
  
function showMovies(movies) {
    main.innerHTML = '';
    movies.forEach((movie) => {
      const { title, poster_path, vote_average, overview } = movie;
      
      const Select_Movie = document.createElement('div');
      Select_Movie.classList.add('movie');

      Select_Movie.innerHTML = `
      <article class="grid">
      <img src="${API_IMG + poster_path}" alt="${title}" width="300">
      <div>
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div>
      ${overview}
      </div>
      </article>
      `
      main.appendChild(Select_Movie);
    });
  }

  function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
  }
  return (
    <body>
    <header>

    </header>

    <main id="main"></main>

  </body>
)
}

  export default Apim;

  