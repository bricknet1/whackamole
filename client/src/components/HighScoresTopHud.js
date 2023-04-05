import { useHistory } from 'react-router-dom';

function HighScoresTopHud(){

  const history = useHistory();

  function handleBack(){
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