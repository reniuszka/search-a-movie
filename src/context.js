import React, { useState, useContext, useEffect } from 'react';
import useFetch from './useFetch';
// make sure to use https - restart the server when you use .env
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
console.log(API_ENDPOINT);
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState({ show: false, msg: '' });
  // const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('harry');
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  // const fetchMovies = async (url) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data, 'data fetch');
  //     if (data.Response === 'True') {
  //       setMovies(data.Search);
  //       setError({ show: false, msg: '' });
  //     } else {
  //       setError({ show: true, msg: data.Error });
  //     }
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchMovies(`${API_ENDPOINT}&s=${query}`);
  // }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
