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
      <button className='tophbutton' onClick={handleBack}><img src={toph} alt="A mugshot of TophDoggy"/></button>
      <br/><br/><br/><br/><br/><br/><br/>❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p>❤️❤️❤️TophDoggy❤️❤️❤️</p>
    </div>
  )
}

export default Secret;