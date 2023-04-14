import { useHistory } from 'react-router-dom';

import toph from '../images/base-jumpers.jpg';
import button3Sound from '../sounds/button3.wav';

function Secret(){

  const history = useHistory();

  const button3SoundPlay = new Audio(button3Sound);

  function handleBack(){
    button3SoundPlay.play()
    history.push('/')
  }

  return(
    <div>
      <button className='tophbutton' onClick={handleBack}><img src={toph}/></button>
      {/* <button className='button2' id='empty' value='2' onClick={handleCode}></button>
      <button className='button3' id='empty' value='3' onClick={handleCode}></button>
      <button className='button4' onClick={handleBack}>Back</button> */}
    </div>
  )
}

export default Secret;