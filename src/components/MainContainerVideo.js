
import { useDispatch, useSelector } from 'react-redux'


const MainContainerVideo = () => {
    const dispatch= useDispatch()
    const mainmovie=useSelector((store)=>store.movies.mainContainerMovie)
    if(!mainmovie) return
    const {video}= mainmovie
    //console.log(video)

    //const videoKey= useSelector()
  return (
    <div className='w-screen absolute ' >
       <iframe className='w-screen aspect-video' src={`https://www.youtube-nocookie.com/embed/${video}?si=2eSH4WOs39E1A4VD&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;showinfo=0&amp;modestbranding=0&amp;autohide=1`} title="YouTube video player" frameborder="0"  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default MainContainerVideo