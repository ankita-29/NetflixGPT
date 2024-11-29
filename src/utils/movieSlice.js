import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name:"movies",
        initialState:{
            nowPlayingMovie:null,
            mainContainerMovie:null,
        },
        reducers:{
            addNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovie=action.payload
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
export const {addNowPlayingMovies, addTrailerVideo,addMainContainerMovie} = movieSlice.actions