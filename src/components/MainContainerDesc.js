import React from 'react'
import { useSelector } from 'react-redux'

const MainContainerDesc = () => {
    const mainmovie=useSelector((store)=>store.movies.mainContainerMovie)
    if(!mainmovie) return 
    
    const {title,overview}= mainmovie

return (
    <div className='bg-gradient-to-r from-black w-screen aspect-video absolute'>
        <div className='mt-[20%] ml-[5%] w-[25%]'>
        <h1 className='text-white text-3xl font-bold m-1 p-2'>{title}</h1>
        <h2 className='text-white text-xl m-1 p-2'>{overview}</h2>
        </div>
        <div className='flex  ml-[5%]'>
            <buton className="text-slate-500 bg-white w-32 m-1 p-3 text-center rounded-md hover:opacity-80"> &#9654; Play</buton>
            <button className='text-white bg-slate-500 w-32 m-1 p-3 rounded-md hover:opacity-80'> &#x24D8; More Info</button>
        </div>
    </div>
  )
}

export default MainContainerDesc