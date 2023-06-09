import { useHistory } from 'react-router-dom';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {clockDown, clockSet, healthSet, scoreSet} from '../actions';
import buttonSound from '../sounds/button.wav';

function PlayTopHud({user, maxHealth}){

  const history = useHistory();

  const buttonSoundPlay = new Audio(buttonSound);

  const time = useSelector(state => state.time)
  const score = useSelector(state => state.score)
  const health = useSelector(state => state.health)
  const coins = useSelector(state => state.coins)
  const dispatch = useDispatch();

  useEffect(() => {
    const playClock = setInterval(()=>{
      dispatch(clockDown(1))
    }, 1000)
    return () => {
      clearInterval(playClock)
      dispatch(clockSet(60))
      dispatch(healthSet(maxHealth))
    }
    // eslint-disable-next-line
  },[])
  

  function handleBack(){
    buttonSoundPlay.play()
    dispatch(scoreSet(0))
    history.push('/')
  }
  
  if(!user){return <></>}else{
    return(
      <div>
        <button className='button1' id='empty'>Score<br/>{score}</button>
        <button className='button2' id='empty'>Coins<br/>{coins}</button>
        <button className='button3' id='empty'>Health<br/>{health<0?"0":health}</button>
        <button className='button4' id='empty' onClick={handleBack}>Time<br/>{time>0&&health>0?time:'Up'}</button>
      </div>
    )
  }
}

export default PlayTopHud;