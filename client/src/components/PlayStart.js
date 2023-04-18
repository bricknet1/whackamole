import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import hitSound from '../sounds/hit.wav';

function PlayStart({user}){
  
  const history = useHistory();

  const hitSoundPlay = new Audio(hitSound);

  const [buttons, setButtons] = useState([user['numpad1'], user['numpad2'], user['numpad3'], user['numpad4'], user['numpad5'], user['numpad6'], user['numpad7'], user['numpad8'], user['numpad9']])

  function keypressListener(){
    document.addEventListener("keypress", handleClick)
  }

  useEffect(()=>{
    if (JSON.stringify(buttons) === JSON.stringify(['','','','','','','','',''])){
      history.push('/play')
    }
    keypressListener()
    return () => {
      document.removeEventListener("keypress", handleClick)
    }
    // eslint-disable-next-line
  },[buttons])

  function handleClick(e){
    let target
    if (e.key){target = e.key}
    if (e.target.value){target = e.target.value}
    const index = buttons.indexOf(target)
    if (index !== -1) {
      hitSoundPlay.play()
      const newButtons = [...buttons]
      newButtons[index] = ''
      setButtons(newButtons)
    }
  }

  if(!user){return <></>}else{

    return(
      <div>
        <p className='settings-p'>Hit every hole to begin</p>
        <button className='hole' id='hole1' value={buttons[0]} onClick={handleClick}>{buttons[0]}</button>
        <button className='hole' id='hole2' value={buttons[1]} onClick={handleClick}>{buttons[1]}</button>
        <button className='hole' id='hole3' value={buttons[2]} onClick={handleClick}>{buttons[2]}</button>
        <button className='hole' id='hole4' value={buttons[3]} onClick={handleClick}>{buttons[3]}</button>
        <button className='hole' id='hole5' value={buttons[4]} onClick={handleClick}>{buttons[4]}</button>
        <button className='hole' id='hole6' value={buttons[5]} onClick={handleClick}>{buttons[5]}</button>
        <button className='hole' id='hole7' value={buttons[6]} onClick={handleClick}>{buttons[6]}</button>
        <button className='hole' id='hole8' value={buttons[7]} onClick={handleClick}>{buttons[7]}</button>
        <button className='hole' id='hole9' value={buttons[8]} onClick={handleClick}>{buttons[8]}</button>
      </div>
    )
  }
}

export default PlayStart;