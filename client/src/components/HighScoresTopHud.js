import { useHistory } from 'react-router-dom';
import buttonSound from '../sounds/button.wav';
import emptySound from '../sounds/empty.wav';

function HighScoresTopHud(){

  const history = useHistory();

  const buttonSoundPlay = new Audio(buttonSound);
  const emptySoundPlay = new Audio(emptySound);
  
  let code = '';
  function handleCode(e){
    code = code+(e.target.value)
    if (code.indexOf('3122213')>-1){
      emptySoundPlay.play()
      history.push('/3122213')
    }
  }

  function handleBack(){
    buttonSoundPlay.play()
    history.push('/')
  }

  return(
    <div>
      <button className='button1' id='empty' value='1' onClick={handleCode}></button>
      <button className='button2' id='empty' value='2' onClick={handleCode}></button>
      <button className='button3' id='empty' value='3' onClick={handleCode}></button>
      <button className='button4' onClick={handleBack}>Back</button>
    </div>
  )
}

export default HighScoresTopHud;