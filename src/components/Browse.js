import React, { useEffect } from 'react'
import { NOWPLAYINGMOVIEURL, TMDBOptions } from '../utils/TMDButils';
import { useDispatch } from 'react-redux';
import { addMainContainerMovie, addNowPlayingMovies, addTrailerVideo } from '../utils/movieSlice';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer.js';
import useBrowseHook from '../utils/customHooks/useBrowseHook.js';


const Browse = () => {
 useBrowseHook()
  return (
    <div>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse