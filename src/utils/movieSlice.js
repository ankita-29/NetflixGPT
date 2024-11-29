import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name:"movies",
        initialState:{
            nowPlayingMovies:null,
            upCommingMovies:null,
            topRatedMovies:null,
            popularMovies:null,
            mainContainerMovie:null,
        },
        reducers:{
            addNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovies=action.payload
            },
            addUpcommingMovies:(state,action)=>{
                state.upCommingMovies=action.payload
            },
            addTopRatedmovies:(state,action)=>{
                state.topRatedMovies=action.payload
            },
            addPopularMovies:(state,action)=>{
                state.popularMovies=action.payload
            },
            addTrailerVideo:(state,action)=>{
                state.mainContainerMovie= {...state.mainContainerMovie,video:action.payload}

            },
            addMainContainerMovie:(state,action)=>{
                state.mainContainerMovie=action.payload
            }

        }
    }
)

export default movieSlice.reducer
export const {addNowPlayingMovies, addTrailerVideo,addMainContainerMovie,addPopularMovies,addUpcommingMovies,addTopRatedmovies} = movieSlice.actions