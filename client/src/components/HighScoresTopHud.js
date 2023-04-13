import { useHistory } from 'react-router-dom';
import buttonSound from '../sounds/button.wav';

function HighScoresTopHud(){

  const history = useHistory();

  const buttonSoundPlay = new Audio(buttonSound);

  function handleBack(){
    buttonSoundPlay.play()
    history.push('/')
  }

  return(
    <div>
      <button className='button1' id='empty'></button>
      <button className='button2' id='empty'></button>
      <button className='button3' id='empty'></button>
      <button className='button4' onClick={handleBack}>Back</button>
    </div>
  )
}

export default HighScoresTopHud;