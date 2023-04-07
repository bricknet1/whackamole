import { useHistory } from 'react-router-dom';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {clockDown, clockSet, healthSet} from '../actions';

function PlayTopHud({user, allItems, item1, item2}){

  const history = useHistory();

  const time = useSelector(state => state.time)
  const score = useSelector(state => state.score)
  const health = useSelector(state => state.health)
  const dispatch = useDispatch();

  useEffect(() => {
    const playClock = setInterval(()=>{
      dispatch(clockDown(1))
    }, 1000)
    return () => {
      clearInterval(playClock)
      dispatch(clockSet(60))
    }
  },[])
  
  function handleBack(){
    history.push('/')
  }
  
  if(!user){return <></>}else{
    // const item1 = user.items.filter(item => item.id === user.item1)[0]
    // const item2 = user.items.filter(item => item.id === user.item2)[0]
    return(
      <div>
        <button className='button1' id='empty'>Score<br/>{score}</button>
        <button className='button2' id='empty'>Coins<br/>{user.coins}</button>
        <button className='button3' id='empty'>Health<br/>{health}</button>
        <button className='button4' onClick={handleBack}>Time<br/>{time>0?time:'Up'}</button>
      </div>
    )
  }
}

export default PlayTopHud;