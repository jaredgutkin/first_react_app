import { useEffect } from 'react';
import './App.css'
import SearchIcon from './search.svg'

//f36bada8

const API_URL = 'http://omdbapi.com?apikey=f36bada8'

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
                <input placeholder='search for movies' />
            </div>
        </div>

    );
}

export default App;