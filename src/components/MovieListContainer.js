import React from 'react'
import MovieCard from './MovieCard'

const MovieListContainer = ({type,movieList}) => {
   // console.log(type)
    //console.log(movieList)
  return (
    <div className='w-screen h-75 '>
        <div className='text-white text-2xl p-2 ml-[2%] h-[10%]'>
            {type}
        </div>
        <div className=' h-[85%] flex overflow-x-auto no-scrollbar'>
            {movieList.map((movie,index)=>{
                if(!!movie)
                {
                return(<MovieCard key={movie.id} movie={movie}/>)
                }
            })}
        </div>

        
    </div>
  )
}

export default MovieListContainer