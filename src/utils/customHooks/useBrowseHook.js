import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NOWPLAYINGMOVIEURL, POPULARMOVIEURL, TMDBOptions, TOPRATEDMOVIEURL, UPCOMMINGMOVIEURL } from '../TMDButils'
import { addMainContainerMovie, addNowPlayingMovies, addPopularMovies, addTopRatedmovies, addTrailerVideo, addUpcommingMovies } from '../movieSlice'

const useBrowseHook = () => {
    const dispatch = useDispatch()
    const fetchandDispatch= async()=>{

      // fetching popular movielist
      const popularmoviedata = await fetch(POPULARMOVIEURL, TMDBOptions) 
      const popularmoviesList= await popularmoviedata.json() //  datajson.results => movie list
      
      // fetching toprated movelist
      const topratedmoviedata = await fetch(TOPRATEDMOVIEURL, TMDBOptions) 
      const topratedmoviesList= await topratedmoviedata.json() //  datajson.results => movie list

      // fetching upcomming movielist
      const upcommingmoviedata = await fetch(UPCOMMINGMOVIEURL, TMDBOptions) 
      const upcommingmoviesList= await upcommingmoviedata.json() //  datajson.results => movie list

      // fetching now playing movie list
      const nowplayingdata = await fetch(NOWPLAYINGMOVIEURL, TMDBOptions) 
      const nowplayingmoviesList= await nowplayingdata.json() //  datajson.results => movie list
      
      const movie = nowplayingmoviesList.results[0] //MainContainerMovie
  
  
      //fetching MainContainervideo
      const MainContainervideo = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`, TMDBOptions)
      const MainContainervideojson = await MainContainervideo.json()
      const trailervideo= (MainContainervideojson.results).filter((itm)=>itm.type==="Trailer")[0]
      
     //console.log(movie)
     // console.log(trailervideo)
  
     dispatch(addUpcommingMovies(upcommingmoviesList.results))
     dispatch(addPopularMovies(popularmoviesList.results))
     dispatch(addTopRatedmovies(topratedmoviesList.results))
     dispatch(addNowPlayingMovies(nowplayingmoviesList.results))  
      
      dispatch(addMainContainerMovie(movie))
  
      dispatch(addTrailerVideo(trailervideo.key))
  
      //const {id,original_title, overview}= movi             
  
    }
    useEffect(()=>{
      fetchandDispatch()
    },[])
}

export default useBrowseHook