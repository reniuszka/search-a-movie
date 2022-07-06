import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINT, useGlobalContext } from './context';
//custom hook
import useFetch from './useFetch';

const SingleMovie = () => {
  //get the value from http params
  const { id } = useParams();
  // data we rename to movie
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);
  // const [movie, setMovie] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState({ show: false, msg: '' });

  // const fetchMovie = async (url) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(url);
  //     const dataMovie = await response.json();
  //     console.log(dataMovie, 'specific movie data');
  //     if ((dataMovie.Response = 'True')) {
  //       setMovie(dataMovie);
  //       setError({ show: false, msg: '' });
  //     } else {
  //       console.log(dataMovie, 'if error');
  //       setError({ show: true, msg: dataMovie.Error });
  //       console.log(error, 'ERROR form wrong api');
  //     }
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error, 'ERROR');
  //     setError({ show: true, msg: error });
  //   }
  // };

  // useEffect(() => {
  //   fetchMovie(`${API_ENDPOINT}&i=${id}`);
  // }, [id]);

  if (isLoading) {
    return <div className='loading'></div>;
  }

  if (error.show) {
    return (
      <div className='page-error'>
        <h3>{error.msg}</h3>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    );
  }
  console.log(movie, 'movie');
  const { Poster: poster, Title: title, Plot: plot, Yaer: year } = movie;

  //invoke it when id changes
  return (
    <section className='single-movie'>
      <img src={poster} alt={title} />
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
