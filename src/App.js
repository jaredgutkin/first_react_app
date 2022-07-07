import { useEffect } from 'react';

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
        <h1>App</h1>
    );
}

export default App;