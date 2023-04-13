import buttonSound from '../sounds/button.wav';

function SettingsBottomHud({handleLogout, user}){

  const buttonSoundPlay = new Audio(buttonSound);

  function handleDelete(){
    buttonSoundPlay.play()
    if(window.confirm("Are you sure you want to delete your account? This can not be undone!")){
      fetch(`/users/${user['id']}`, {
        method: "DELETE"
      })
      .then(res => {
        if(res.ok){
          handleLogout()
        }
      })
    }
  }

  return(
    <div>
      <button className='button1' onClick={handleDelete}>Delete Account</button>
      <button className='button2' id='empty'></button>
      <button className='button3' id='empty'></button>
      <button className='button4' onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default SettingsBottomHud;