import {useState} from 'react'

function HighScoresBottomHud({handleLogout}){

  const [hiPete, setHiPete] = useState(false);

  function handlePete(){
    setHiPete(current => !current)
  }

  return(
    <div>
      <button className='button1' id='empty' onClick={handlePete}>{hiPete?'Hi Pete!':''}</button>
      <button className='button2' id='empty'></button>
      <button className='button3' id='empty'></button>
      <button className='button4' onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default HighScoresBottomHud;