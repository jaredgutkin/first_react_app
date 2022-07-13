import { useEffect } from 'react';
import './App.css'
import SearchIcon from './search.svg'

//f36bada8

const API_URL = 'http://omdbapi.com?apikey=f36bada8'

const movie1 = {
    "Title": "Evil Dead II",
    "Year": "1987",
    "imdbID": "tt0092991",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWY3ODZlOGMtNzJmOS00ZTNjLWI3ZWEtZTJhZTk5NDZjYWRjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search)
    }

    useEffect(()=>{
        searchMovies('Evil Dead');
    }, [])

    return (
        <div className='app'>
            <h1>Movie App</h1>
            <div className="search">
                <input 
                    placeholder='search for movies'
                    value='Movies'
                    onChange={()=> {}} 
                />
                <img 
                    src={SearchIcon} 
                    alt="search"
                    onClick={()=>{}} 
                />
            </div>
            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
                    </div>
                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default App;