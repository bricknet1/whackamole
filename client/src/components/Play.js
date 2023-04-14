import {useEffect, useState, useRef} from 'react';
import {hole1hit, hole1up, hole2hit, hole2up, hole3hit, hole3up, hole4hit, hole4up, hole5hit, hole5up, hole6hit, hole6up, hole7hit, hole7up, hole8hit, hole8up, hole9hit, hole9up, healthDown, clockDown, scoreUp, scoreSet, healthUp, clockUp, coinsSet, healthSet} from '../actions';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

import avocado1 from '../images/avocado1.png';
import avocado2 from '../images/avocado2.png';

import emptySound from '../sounds/empty.wav';
import loseSound from '../sounds/lose.wav';
import hitSound from '../sounds/hit.wav';
import timeSound from '../sounds/time.wav';
import healthSound from '../sounds/health.wav';
import coinSound from '../sounds/coin.wav';
import buttonSound from '../sounds/button.wav';

function Play({user, setValues, setUser, maxHealth, enemySetter}){
  
  const history = useHistory();

  const [loaded, setLoaded] = useState(false);
  const [tier, setTier] = useState(1);
  const [shouldAddListener, setShouldAddListener] = useState(true);

  const emptySoundPlay = new Audio(emptySound);
  const loseSoundPlay = new Audio(loseSound);
  const hitSoundPlay = new Audio(hitSound);
  const timeSoundPlay = new Audio(timeSound);
  const healthSoundPlay = new Audio(healthSound);
  const coinSoundPlay = new Audio(coinSound);
  const buttonSoundPlay = new Audio(buttonSound);

  const time = useSelector(state => state.time)
  const score = useSelector(state => state.score)
  const health = useSelector(state => state.health)
  const coins = useSelector(state => state.coins)
  const attackValue = useSelector(state => state.attackValue)
  const defenseValue = useSelector(state => state.defenseValue)
  const hole1 = useSelector(state => state.hole1)
  const hole2 = useSelector(state => state.hole2)
  const hole3 = useSelector(state => state.hole3)
  const hole4 = useSelector(state => state.hole4)
  const hole5 = useSelector(state => state.hole5)
  const hole6 = useSelector(state => state.hole6)
  const hole7 = useSelector(state => state.hole7)
  const hole8 = useSelector(state => state.hole8)
  const hole9 = useSelector(state => state.hole9)
  const enemies = useSelector(state => state.enemies)

  const dispatch = useDispatch();

  const timeoutsRef = useRef([]);
  
  const buttons = [user['numpad1'], user['numpad2'], user['numpad3'], user['numpad4'], user['numpad5'], user['numpad6'], user['numpad7'], user['numpad8'], user['numpad9']]
  
  const holeList = [hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9]

  useEffect(()=>{
    enemySetter()
    console.log(time);
    console.log(health);
    setValues(user)
    dispatch(hole1up([0,0,0]))
    dispatch(hole2up([0,0,0]))
    dispatch(hole3up([0,0,0]))
    dispatch(hole4up([0,0,0]))
    dispatch(hole5up([0,0,0]))
    dispatch(hole6up([0,0,0]))
    dispatch(hole7up([0,0,0]))
    dispatch(hole8up([0,0,0]))
    dispatch(hole9up([0,0,0]))
    dispatch(scoreSet(0))
    holeBegin()
    return(dispatch(scoreSet(0)))
    // eslint-disable-next-line
  },[])

  useEffect(()=>{
    if (loaded && shouldAddListener){
      keypressListener()
    }
    return () => {
      document.removeEventListener("keypress", hit)
    }
    // eslint-disable-next-line
  },[...holeList, shouldAddListener])

  useEffect(() => {
    if ((time <= 0 || health <= 0) && shouldAddListener) {
      timeoutsRef.current.forEach(timeoutId => clearTimeout(timeoutId));
      emptyHoles()
      setShouldAddListener(false)
      loseSoundPlay.play()
    }
    // eslint-disable-next-line
  }, [time, health]);

  function randomEnemy(tier){
    let availableEnemies = []
    for(let i=0; i<enemies.length; i++){
      if(enemies[i].tier<=tier){
        availableEnemies.push(enemies[i])
      }
    }
    if(tier>1){availableEnemies.splice(0,((tier-1)*2))}
    const selectedEnemy = availableEnemies[(Math.floor(Math.random()*(availableEnemies.length)))]
    return([selectedEnemy.attack, selectedEnemy.health, selectedEnemy.points])
  }
  

  const hole1Clock = ()=> {
    const timeoutId = setTimeout(()=>{
      dispatch(hole1up(randomEnemy(tier)))
    }, randomTime(1000,10000))
    timeoutsRef.current.push(timeoutId)
  }
  const hole2Clock = ()=> {
    const timeoutId = setTimeout(()=>{
      dispatch(hole2up(randomEnemy(tier)))
    }, randomTime(1000,10000))
    timeoutsRef.current.push(timeoutId)
  }
  const hole3Clock = ()=> {
    const timeoutId = setTimeout(()=>{
      dispatch(hole3up(randomEnemy(tier)))
    }, randomTime(1000,10000))
    timeoutsRef.current.push(timeoutId)
  }
  const hole4Clock = ()=> {
    const timeoutId = setTimeout(()=>{
      dispatch(hole4up(randomEnemy(tier)))
    }, randomTime(1000,10000))
    timeoutsRef.current.push(timeoutId)
  }
  const hole5Clock = ()=> {
    const timeoutId = setTimeout(()=>{
      dispatch(hole5up(randomEnemy(tier)))
    }, randomTime(1000,10000))
    timeoutsRef.current.push(timeoutId)
  }
  const hole6Clock = ()=> {
    const timeoutId = setTimeout(()=>{
      dispatch(hole6up(randomEnemy(tier)))
    }, randomTime(1000,10000))
    timeoutsRef.current.push(timeoutId)
  }
  const hole7Clock = ()=> {
    const timeoutId = setTimeout(()=>{
      dispatch(hole7up(randomEnemy(tier)))
    }, randomTime(1000,10000))
    timeoutsRef.current.push(timeoutId)
  }
  const hole8Clock = ()=> {
    const timeoutId = setTimeout(()=>{
      dispatch(hole8up(randomEnemy(tier)))
    }, randomTime(1000,10000))
    timeoutsRef.current.push(timeoutId)
  }
  const hole9Clock = ()=> {
    const timeoutId = setTimeout(()=>{
      dispatch(hole9up(randomEnemy(tier)))
    }, randomTime(1000,10000))
    timeoutsRef.current.push(timeoutId)
  }

  const raiseTierClock = ()=> setTimeout(()=>{
    setTier(current=>current+1)
    raiseTierClock()
  }, 20000)

  function holeBegin(){
    hole1Clock()
    hole2Clock()
    hole3Clock()
    hole4Clock()
    hole5Clock()
    hole6Clock()
    hole7Clock()
    hole8Clock()
    hole9Clock()
    raiseTierClock()
    setLoaded(true)
  }

  function addCoins(){
    const values = {"coins":coins+Math.ceil(tier/3)}
    fetch(`/users/${user['id']}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(res => {
      if (res.ok) {
        res.json().then(data => {
          setUser(data);
          dispatch(coinsSet(data.coins));
          coinSoundPlay.play();
        })
      } else {
        res.json().then(error => console.log(error.message))
      };
    })
  }

  function reward(){
    const rewardType = randomTime(1,20);
    if(rewardType===1 || rewardType===2 || rewardType===3){
      addCoins();
      console.log("coin reward");
    } else if (rewardType===10 || rewardType===11 || rewardType===12){
      healthSoundPlay.play();
      if ((health+(Math.ceil(tier/3)))>maxHealth){
        dispatch(healthSet(maxHealth));
      } else if ((health+(Math.ceil(tier/3)))<=maxHealth) {
        dispatch(healthUp(Math.ceil(tier/3)));
      }
      console.log("health reward");
    } else if (rewardType===18 || rewardType===19 || rewardType===20){
      timeSoundPlay.play();
      dispatch(clockUp(5));
      console.log("time reward");
    } else {
      console.log("no reward");
      hitSoundPlay.play();
    }
  }

  function keypressListener(){
    document.addEventListener("keypress", hit)
  }

  function hitEmptyHole(){
    console.log("Hit an empty hole");
    dispatch(clockDown(5));
    emptySoundPlay.play();
    document.addEventListener("keypress", hit);
  }

  function hit(e){
    document.removeEventListener("keypress", hit)
    if (time<1 || health<1){
      return(loseSoundPlay.play())
    } else if (time>0 && health>0){

      if (e.key===buttons[0]){
        if (hole1[1]>0){
          dispatch(hole1hit(attackValue))
          if(defenseValue<hole1[0]){dispatch(healthDown(hole1[0]-defenseValue))}
          if((hole1[1]-attackValue)<=0){
            dispatch(scoreUp(hole1[2]))
            hole1Clock()
            reward()
          } else {hitSoundPlay.play()}
        } else if (hole1[1]<=0){
          hitEmptyHole()
        }

      } else if (e.key===buttons[1]){
        if (hole2[1]>0){
          dispatch(hole2hit(attackValue))
          if(defenseValue<hole2[0]){dispatch(healthDown(hole2[0]-defenseValue))}
          if((hole2[1]-attackValue)<=0){
            dispatch(scoreUp(hole2[2]))
            hole2Clock()
            reward()
          } else {hitSoundPlay.play()}
        } else if (hole2[1]<=0){
          hitEmptyHole()
        }

      } else if (e.key===buttons[2]){
        if (hole3[1]>0){
          dispatch(hole3hit(attackValue))
          if(defenseValue<hole3[0]){dispatch(healthDown(hole3[0]-defenseValue))}
          if((hole3[1]-attackValue)<=0){
            dispatch(scoreUp(hole3[2]))
            hole3Clock()
            reward()
          } else {hitSoundPlay.play()}
        } else if (hole3[1]<=0){
          hitEmptyHole()
        }

      } else if (e.key===buttons[3]){
        if (hole4[1]>0){
          dispatch(hole4hit(attackValue))
          if(defenseValue<hole4[0]){dispatch(healthDown(hole4[0]-defenseValue))}
          if((hole4[1]-attackValue)<=0){
            dispatch(scoreUp(hole4[2]))
            hole4Clock()
            reward()
          } else {hitSoundPlay.play()}
        } else if (hole4[1]<=0){
          hitEmptyHole()
        }
        
      } else if (e.key===buttons[4]){
        if (hole5[1]>0){
          dispatch(hole5hit(attackValue))
          if(defenseValue<hole5[0]){dispatch(healthDown(hole5[0]-defenseValue))}
          if((hole5[1]-attackValue)<=0){
            dispatch(scoreUp(hole5[2]))
            hole5Clock()
            reward()
          } else {hitSoundPlay.play()}
        } else if (hole5[1]<=0){
          hitEmptyHole()
        }

      } else if (e.key===buttons[5]){
        if (hole6[1]>0){
          dispatch(hole6hit(attackValue))
          if(defenseValue<hole6[0]){dispatch(healthDown(hole6[0]-defenseValue))}
          if((hole6[1]-attackValue)<=0){
            dispatch(scoreUp(hole6[2]))
            hole6Clock()
            reward()
          } else {hitSoundPlay.play()}
        } else if (hole6[1]<=0){
          hitEmptyHole()
        }

      } else if (e.key===buttons[6]){
        if (hole7[1]>0){
          dispatch(hole7hit(attackValue))
          if(defenseValue<hole7[0]){dispatch(healthDown(hole7[0]-defenseValue))}
          if((hole7[1]-attackValue)<=0){
            dispatch(scoreUp(hole7[2]))
            hole7Clock()
            reward()
          } else {hitSoundPlay.play()}
        } else if (hole7[1]<=0){
          hitEmptyHole()
        }

      } else if (e.key===buttons[7]){
        if (hole8[1]>0){
          dispatch(hole8hit(attackValue))
          if(defenseValue<hole8[0]){dispatch(healthDown(hole8[0]-defenseValue))}
          if((hole8[1]-attackValue)<=0){
            dispatch(scoreUp(hole8[2]))
            hole8Clock()
            reward()
          } else {hitSoundPlay.play()}
        } else if (hole8[1]<=0){
          hitEmptyHole()
        }

      } else if (e.key===buttons[8]){
        if (hole9[1]>0){
          dispatch(hole9hit(attackValue))
          if(defenseValue<hole9[0]){dispatch(healthDown(hole9[0]-defenseValue))}
          if((hole9[1]-attackValue)<=0){
            dispatch(scoreUp(hole9[2]))
            hole9Clock()
            reward()
          } else {hitSoundPlay.play()}
        } else if (hole9[1]<=0){
          hitEmptyHole()
        }
      } else {
        console.log(e.key+' is not a valid button')
        document.addEventListener("keypress", hit)
      }
    }
  }

  function randomTime(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
  }

  function handleClick(e){
    const keyEvent = new KeyboardEvent("keypress", {key:user[e.currentTarget.value]})
    document.dispatchEvent(keyEvent)
  }

  function handleBack(){
    buttonSoundPlay.play()
    const values = {"score":score, "id":user.id}
    fetch('/highscores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(res => {
      if (res.ok) {
        history.push('/highscores')
      } else {
        res.json().then(error => console.log(error.message))
      };
    })
  }

  function emptyHoles(){
    dispatch(hole1up([0,0,0]))
    dispatch(hole2up([0,0,0]))
    dispatch(hole3up([0,0,0]))
    dispatch(hole4up([0,0,0]))
    dispatch(hole5up([0,0,0]))
    dispatch(hole6up([0,0,0]))
    dispatch(hole7up([0,0,0]))
    dispatch(hole8up([0,0,0]))
    dispatch(hole9up([0,0,0]))
  }

  const avocadoImages = [avocado1, avocado2]

  // const [nextAvocado, setNextAvocado] = useState(0);

  const randomAvocado = () => {
    return (avocadoImages[randomTime(0,(avocadoImages.length-1))])
    // setNextAvocado(current => current+1)
    // return (avocadoImages[nextAvocado])
  }



  if(!user){return <></>}else{
    if(time<1 || health<1){
      return(
        <div className='home-body'><h1>Game Over</h1><h2>Score: {score}</h2><button onClick={handleBack}>Back</button><br/><br/><br/><br/>Click back to save your score to the leaderboard!</div>
      )
    }else{
      return(
        <div>
          <p className='settings-p'>Wave {tier}</p>
          <button className='hole' id='hole1' value='numpad1' onClick={handleClick}>{hole1[1]>0?<><img className='enemyImage' alt='enemy' src={randomAvocado()}/><div className='holeText'>{hole1[0]+"/"+hole1[1]}</div></>:''}</button>
          <button className='hole' id='hole2' value='numpad2' onClick={handleClick}>{hole2[1]>0?<><img className='enemyImage' alt='enemy' src={randomAvocado()}/><div className='holeText'>{hole2[0]+"/"+hole2[1]}</div></>:''}</button>
          <button className='hole' id='hole3' value='numpad3' onClick={handleClick}>{hole3[1]>0?<><img className='enemyImage' alt='enemy' src={randomAvocado()}/><div className='holeText'>{hole3[0]+"/"+hole3[1]}</div></>:''}</button>
          <button className='hole' id='hole4' value='numpad4' onClick={handleClick}>{hole4[1]>0?<><img className='enemyImage' alt='enemy' src={randomAvocado()}/><div className='holeText'>{hole4[0]+"/"+hole4[1]}</div></>:''}</button>
          <button className='hole' id='hole5' value='numpad5' onClick={handleClick}>{hole5[1]>0?<><img className='enemyImage' alt='enemy' src={randomAvocado()}/><div className='holeText'>{hole5[0]+"/"+hole5[1]}</div></>:''}</button>
          <button className='hole' id='hole6' value='numpad6' onClick={handleClick}>{hole6[1]>0?<><img className='enemyImage' alt='enemy' src={randomAvocado()}/><div className='holeText'>{hole6[0]+"/"+hole6[1]}</div></>:''}</button>
          <button className='hole' id='hole7' value='numpad7' onClick={handleClick}>{hole7[1]>0?<><img className='enemyImage' alt='enemy' src={randomAvocado()}/><div className='holeText'>{hole7[0]+"/"+hole7[1]}</div></>:''}</button>
          <button className='hole' id='hole8' value='numpad8' onClick={handleClick}>{hole8[1]>0?<><img className='enemyImage' alt='enemy' src={randomAvocado()}/><div className='holeText'>{hole8[0]+"/"+hole8[1]}</div></>:''}</button>
          <button className='hole' id='hole9' value='numpad9' onClick={handleClick}>{hole9[1]>0?<><img className='enemyImage' alt='enemy' src={randomAvocado()}/><div className='holeText'>{hole9[0]+"/"+hole9[1]}</div></>:''}</button>
        </div>
      )
    }
  }
}

export default Play;