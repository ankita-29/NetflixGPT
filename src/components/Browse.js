
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer.js';
import useBrowseHook from '../utils/customHooks/useBrowseHook.js';


const Browse = () => {
 useBrowseHook()
  return (
    <div id="Browse">
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse