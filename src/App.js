import { useEffect, useState } from 'react';
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';


//f36bada8

const API_URL = 'http://omdbapi.com?apikey=f36bada8'


const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState([])

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

       setMovies(data.Search)
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
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)} 
                />
                <img 
                    src={SearchIcon} 
                    alt='search'
                    onClick={()=> searchMovies(searchTerm)} 
                />

            </div>
            {
                    movies?.length > 0  
                    ? (
                        <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
        
                    </div>
                    ) : (
                        <div className="empty">
                            No movies found
                        </div>
                    )
                }
        </div>

    );
}

export default App;