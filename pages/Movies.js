
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const API_IMG = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json();
    showMovies(data.results)
}

function showMovies(movies) {
main.innerHTML = '';
movies.forEach((movie) => {
  const { title, poster_path, vote_average, overview, release_date} = movie;
  
  const main = document.getElementById('main')
  const Select_Movie = document.createElement('div');
  Select_Movie.classList.add('movie');

  Select_Movie.innerHTML = `
  <table class="grid">
  <article>
  <img src="${API_IMG + poster_path}" alt="${title}" width="300">
  <div>
  <h3>${title}</h3>
  <p>Relase date: ${release_date}</p>
  <span style="color: ${getColor(vote_average)}">${vote_average}</span>
  </div>
  <div>
  ${overview}
  </div>
  </article>
  </table>
  `
  main.appendChild(Select_Movie);
});
}

function getColor(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

function a(){
const search = document.getElementById('search')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const SearchMovie = search.value

    if(SearchMovie && SearchMovie !== '') 
    {
        getMovies(SEARCH_API + SearchMovie)
        search.value = ''
        //console.log(getMovies(SEARCH_API + SearchMovie))
    } else {
        window.location.reload()
    }
})
}

getMovies(API_URL);

function Movies(){
    return (
        <>
        <form id="form">
        <input type="search" onClick={a} placeholder="Search a movie..." id="search" className="search" aria-invalid="false"></input>
        </form>
        <main id="main"></main>
        </>
    )
}

export default Movies;