import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com?apikey=b169cf0';

function App() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [thrillerMovies, setThrillerMovies] = useState([]);
  const [serachTerm, setSearchTerm] = useState('');

  const searchMovies = async (title: string) => {
    console.log('title->' + title);
    console.log(API_URL + '&s=' + title);
    const response = await fetch(API_URL + '&s=' + title);
    console.log('response->' + response);
    const data = await response.json();
    console.log('response data->' + data);
    setSearchedMovies(data.Search);
  };

  const searchTrendingMovies = async (title: string) => {
    console.log('title->' + title);
    console.log(API_URL + '&s=' + title);
    const response = await fetch(API_URL + '&s=' + title);
    console.log('response->' + response);
    const data = await response.json();
    console.log('response data->' + data);
    setTrendingMovies(data.Search);
  };

  const searchActionMovies = async (title: string) => {
    console.log('title->' + title);
    console.log(API_URL + '&s=' + title);
    const response = await fetch(API_URL + '&s=' + title);
    console.log('response->' + response);
    const data = await response.json();
    console.log('response data->' + data);
    setActionMovies(data.Search);
  };

  const searchComedyMovies = async (title: string) => {
    console.log('title->' + title);
    console.log(API_URL + '&s=' + title);
    const response = await fetch(API_URL + '&s=' + title);
    console.log('response->' + response);
    const data = await response.json();
    console.log('response data->' + data);
    setComedyMovies(data.Search);
  };

  const searchHorrorMovies = async (title: string) => {
    console.log('title->' + title);
    console.log(API_URL + '&s=' + title);
    const response = await fetch(API_URL + '&s=' + title);
    console.log('response->' + response);
    const data = await response.json();
    console.log('response data->' + data);
    setHorrorMovies(data.Search);
  };

  const searchRomanceMovies = async (title: string) => {
    console.log('title->' + title);
    console.log(API_URL + '&s=' + title);
    const response = await fetch(API_URL + '&s=' + title);
    console.log('response->' + response);
    const data = await response.json();
    console.log('response data->' + data);
    setRomanceMovies(data.Search);
  };

  const searchThrillerMovies = async (title: string) => {
    console.log('title->' + title);
    console.log(API_URL + '&s=' + title);
    const response = await fetch(API_URL + '&s=' + title);
    console.log('response->' + response);
    const data = await response.json();
    console.log('response data->' + data);
    setThrillerMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('Batman');
  }, []);

  useEffect(() => {
    searchTrendingMovies('Trend');
  }, []);

  useEffect(() => {
    searchActionMovies('Action');
  }, []);

  useEffect(() => {
    searchComedyMovies('Comedy');
  }, []);

  useEffect(() => {
    searchHorrorMovies('Horror');
  }, []);

  useEffect(() => {
    searchRomanceMovies('Romance');
  }, []);

  useEffect(() => {
    searchThrillerMovies('Thriller');
  }, []);

  return (
    <>
      <h3 className="title">MOVIES & TV APP</h3>
      <div className="search">
        <input
          className="searchBox"
          placeholder="Ex. Batman"
          value={serachTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img
          className="searchIcon"
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(serachTerm)}
        />
      </div>
      <br />
      <h4>
        Search Results For{' '}
        <span className="searchedMovie">
          {serachTerm.length > 0 ? serachTerm : 'Batman'}
        </span>
        :
      </h4>
      {searchedMovies?.length > 0 ? (
        <div className="container">
          {searchedMovies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
      <hr></hr>
      <br />
      <h4>TRENDING:</h4>
      {trendingMovies?.length > 0 ? (
        <div className="container">
          {trendingMovies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
      <hr></hr>
      <br />
      <h4>ACTION:</h4>
      {actionMovies?.length > 0 ? (
        <div className="container">
          {actionMovies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
      <hr></hr>
      <br />
      <h4>COMEDY:</h4>
      {comedyMovies?.length > 0 ? (
        <div className="container">
          {comedyMovies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
      <hr></hr>
      <br />
      <h4>HORROR:</h4>
      {horrorMovies?.length > 0 ? (
        <div className="container">
          {horrorMovies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
      <hr></hr>
      <br />
      <h4>ROMANCE:</h4>
      {romanceMovies?.length > 0 ? (
        <div className="container">
          {romanceMovies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
      <hr></hr>
      <br />
      <h4>THRILLER:</h4>
      {thrillerMovies?.length > 0 ? (
        <div className="container">
          {thrillerMovies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
      <hr></hr>
      <br />
    </>
  );
}

export default App;
