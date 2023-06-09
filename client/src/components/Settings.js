import {useState} from 'react';

import buttonSound from '../sounds/button.wav';
import button2Sound from '../sounds/button2.wav';

function Settings({user, setUser}){

  const [active, setActive] = useState(false);

  const buttonSoundPlay = new Audio(buttonSound);
  const button2SoundPlay = new Audio(button2Sound);

  function fetcher(values){
    fetch(`/users/${user['id']}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(res => {
      if (res.ok) {
        res.json().then(data => setUser(data))
      } else {
        res.json().then(error => console.log(error.message))
      };
    })
  }
  
  if(!user){return <></>}else{
    const buttons = [user['numpad1'], user['numpad2'], user['numpad3'], user['numpad4'], user['numpad5'], user['numpad6'], user['numpad7'], user['numpad8'], user['numpad9']]

    function handleClick(e){
      if (active===false){
        setActive(true)
        buttonSoundPlay.play()
        const whichHole = e.target.value;
        document.addEventListener("keypress", keyOutput)
        function keyOutput(e){
          if (buttons.includes(e.key)){
            alert('That key is already assigned. Please try again.')
            document.removeEventListener("keypress", keyOutput)
            setActive(false)
          }else{
            document.removeEventListener("keypress", keyOutput)
            button2SoundPlay.play()
            const values = {[whichHole]:e.key}
            fetcher(values)
            setActive(false)
          }
        }
      } else if (active===true){return ''}
    }

    return(
      <div>
        <p className='settings-p'>Click a hole and then type the key you want to assign to it</p>
        <button className='hole' id='hole1' value='numpad1' onClick={handleClick}>{user.numpad1}</button>
        <button className='hole' id='hole2' value='numpad2' onClick={handleClick}>{user.numpad2}</button>
        <button className='hole' id='hole3' value='numpad3' onClick={handleClick}>{user.numpad3}</button>
        <button className='hole' id='hole4' value='numpad4' onClick={handleClick}>{user.numpad4}</button>
        <button className='hole' id='hole5' value='numpad5' onClick={handleClick}>{user.numpad5}</button>
        <button className='hole' id='hole6' value='numpad6' onClick={handleClick}>{user.numpad6}</button>
        <button className='hole' id='hole7' value='numpad7' onClick={handleClick}>{user.numpad7}</button>
        <button className='hole' id='hole8' value='numpad8' onClick={handleClick}>{user.numpad8}</button>
        <button className='hole' id='hole9' value='numpad9' onClick={handleClick}>{user.numpad9}</button>
      </div>
    )
  }
}

export default Settings;