import React from 'react'
import { MOVIEPOSTERBASEADDRESS } from '../utils/TMDButils'

const MovieCard = ({movie}) => {
  console.log(movie)
  console.log(MOVIEPOSTERBASEADDRESS+ movie.backdrop_path  )
  return (
    <div className='min-w-80 rounded-md m-1'>
        <img className='w-[100%] rounded-md' src={MOVIEPOSTERBASEADDRESS+movie.backdrop_path}/> 
    </div>
  )
}

export default MovieCard