import React from 'react'
import { useSelector } from 'react-redux'
import MovieListContainer from './MovieListContainer'

const SecondaryContainer = () => {
  const lists=[
    {type:"Popular",movieList:useSelector((store)=> store?.movies?.popularMovies),},
    {type:"Upcomming",movieList:useSelector((store)=> store?.movies?.upCommingMovies),},
    {type:"TopRated",movieList:useSelector((store)=> store?.movies?.topRatedMovies),},
    {type:"Recommended",movieList:useSelector((store)=> store?.movies?.nowPlayingMovies),},
  ]
  //console.lo)
  return (
    <div className='w-screen bg-black'>
      <div className='-mt-40 z-100 relative ml-10'>
      {  lists.map((listitm)=>{
          return(listitm.movieList && <div className=''> <MovieListContainer key={listitm.type} type={listitm.type} movieList={listitm.movieList}/></div>)
        })
      }
      </div>
    </div>
  )
}

export default SecondaryContainer