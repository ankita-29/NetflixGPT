import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NOWPLAYINGMOVIEURL, TMDBOptions } from '../TMDButils'
import { addMainContainerMovie, addNowPlayingMovies, addTrailerVideo } from '../movieSlice'

const useBrowseHook = () => {
    const dispatch = useDispatch()
    const fetchandDispatch= async()=>{
      // fetching now playing movie list
      const data = await fetch(NOWPLAYINGMOVIEURL, TMDBOptions) 
      const moviesList= await data.json() //  datajson.results => movie list
      
      const movie = moviesList.results[4] //MainContainerMovie
  
  
      //fetching MainContainervideo
      const data2 = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`, TMDBOptions)
      const data2json = await data2.json()
      const trailervideo= (data2json.results).filter((itm)=>itm.type==="Trailer")[0]
      
     //console.log(movie)
     // console.log(trailervideo)
  
      
      dispatch(addNowPlayingMovies(moviesList.results))  
      
      dispatch(addMainContainerMovie(movie))
  
      dispatch(addTrailerVideo(trailervideo.key))
  
      //const {id,original_title, overview}= movi             
  
    }
    useEffect(()=>{
      fetchandDispatch()
    },[])
}

export default useBrowseHook