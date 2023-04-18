import { useHistory } from 'react-router-dom';
import buttonSound from '../sounds/button.wav';

function Home({user, handleLogout}){

  const history = useHistory();

  const buttonSoundPlay = new Audio(buttonSound);
  // const button3SoundPlay = new Audio(buttonSound);

  function handlePlay(){
    buttonSoundPlay.play()
    history.push('/play')
  }

  function handleItems(){
    buttonSoundPlay.play()
    history.push('/items')
  }

  function handleSettings(){
    buttonSoundPlay.play()
    history.push('/settings')
  }

  function handleHighScores(){
    buttonSoundPlay.play()
    history.push('/highscores')
  }

  function handleHowToPlay(){
    buttonSoundPlay.play()
    history.push('/howtoplay')
  }

  return(
    <div className='home-body'>
      <br/><h2>{user.username}</h2><br/><br/>
      <button onClick={handlePlay}>PLAY</button><br/><br/><br/>
      <button onClick={handleItems}>Items</button><br/><br/><br/>
      <button onClick={handleSettings}>Settings</button><br/><br/><br/>
      <button onClick={handleHighScores}>High Scores</button><br/><br/><br/>
      <button onClick={handleHowToPlay}>How To Play</button><br/><br/><br/>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Home;