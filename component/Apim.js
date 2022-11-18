
function Apim() {

    const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
    // API img
    //const API_IMG = 'https://image.tmdb.org/t/p/w1280'
    // Search
    //const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=3fd2be6f0c'
    //'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
    
    //const main = document.getElementById('main')
    //const form = document.getElementById('form')
    //const search = document.getElementById('search')
    
    getMovies(API_URL);
    
    async function getMovies(url){
        const res = await fetch(url)
        const data = await res.json();
        console.log(data);
    }
  
    return (
      <h1> Hola2222 </h1>
    );
  }

  export default Apim;

  