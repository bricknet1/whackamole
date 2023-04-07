import { useHistory } from 'react-router-dom';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {clockDown, clockSet} from '../actions';

function PlayTopHud({user, allItems, item1, item2}){

  const history = useHistory();
  const time = useSelector(state => state.time)
  const score = useSelector(state => state.score)
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
    const item1 = user.items.filter(item => item.id === user.item1)[0]
    const item2 = user.items.filter(item => item.id === user.item2)[0]
    return(
      <div>
        <button className='button1' id='empty' onClick={handleBack}></button>
        <button className='button2' id='empty'>Coins {user.coins}</button>
        <button className='button3' id='empty'>Health {10+(item1?item1.health:0)+(item2?item2.health:0)}</button>
        <button className='button4' onClick={handleBack}>Time {time}</button>
      </div>
    )
  }
}

export default PlayTopHud;