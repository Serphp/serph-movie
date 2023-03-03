const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const API_IMG = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {

    if (!main) {
        console.error('Error: No se pudo encontrar el elemento con id "main".');
        return;
    }

    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
        <table className="grid">
            <div class="btn">
            <a href="https://www.google.com/search?q=${title}" target="_blank">more info 
            </a>
            </div>

            <img class="imgcon" src="${API_IMG + poster_path}" alt="${title}">
            <div class="movie-info">
            
            <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
            <h3>${title}</h3>
            <h3>Overview</h3>
            ${overview}
            </div>
        
        </table>
        `
        main.appendChild(movieEl)
    })
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


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})