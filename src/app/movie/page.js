  import React from 'react'
  import MovieCard from '../components/MovieCard';

  const Movie = async () => {
    const url = "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en"
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f2aa1568fbmsh56961f62199545bp195d85jsnc7d5a4f90446',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url,options);

  const data = await res.json();
  const main_data = data.titles;
  console.log(data)
    return (
      <>
      <h1>MOVIE PAGE</h1>
      <div className='flex flex-wrap px-14 p-4 justify-center items-center'>
      {
        main_data.map((curElem)=>{
          return <MovieCard key={curElem.id} {...curElem}  />
        })
      }
      </div>
      </>
    )
  }

  export default Movie