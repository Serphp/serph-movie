
import Apim from "../component/Apim";

function Movies(){
    return (
        <>
        <h1> Hola </h1>

        <form id="form">
            <input type="text" id="search" placeholder="Search for a movie..." />
        </form>
        <Apim />
        </>
    )
}

{/*
<Movie />
<Apim />
*/}

export default Movies;