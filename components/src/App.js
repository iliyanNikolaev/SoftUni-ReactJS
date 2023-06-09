import './App.css';
import React from 'react';
//import { movies as moviesData} from './movies';
import MovieList from './components/MovieList';

function App() {
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/movies.json')
            .then(res => res.json())
            .then(data => {
                setMovies(data);
            });
    }, []);

    const onMovieDelete = (id) => {
        setMovies(oldMovies => oldMovies.filter(x => x._id !== id));
    }

    const onMovieSelected = (id) => {
        setMovies(oldMovies => oldMovies.map(movie => movie._id === id ? { ...movie, selected: true } : { ...movie, selected: false }));
    }

    return (
        <div className="App">
            <h1>ReactJS-Components-Demo</h1>
            <hr />
            <h2>Movie collection</h2>

            <MovieList movies={movies} onMovieDelete={onMovieDelete} onMovieSelected={onMovieSelected} />
        </div>
    );
}

export default App;
