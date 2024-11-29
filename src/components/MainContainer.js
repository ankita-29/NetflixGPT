import MainContainerVideo from './MainContainerVideo'
import MainContainerDesc from './MainContainerDesc'
const MainContainer = () => { 
    return (
    <div className='w-full aspect-video'>
        <MainContainerVideo/>
        <MainContainerDesc/>
    </div>
  )
}

export default MainContainer