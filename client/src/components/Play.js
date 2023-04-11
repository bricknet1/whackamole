import {useEffect, useState} from 'react';
import {hole1hit, hole1up, hole2hit, hole2up, hole3hit, hole3up, hole4hit, hole4up, hole5hit, hole5up, hole6hit, hole6up, hole7hit, hole7up, hole8hit, hole8up, hole9hit, hole9up, healthDown, clockDown, scoreUp, scoreSet} from '../actions';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { useElapsedTime } from 'use-elapsed-time'

function Play({user, setValues}){
  
  const history = useHistory();

  const [loaded, setLoaded] = useState(false);
  const [tier, setTier] = useState(1);

  // const {elapsedTime} = useElapsedTime({isPlaying: loaded});

  const time = useSelector(state => state.time)
  const score = useSelector(state => state.score)
  const health = useSelector(state => state.health)
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
  
  const buttons = [user['numpad1'], user['numpad2'], user['numpad3'], user['numpad4'], user['numpad5'], user['numpad6'], user['numpad7'], user['numpad8'], user['numpad9']]
  
  const holeList = [hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9]

  useEffect(()=>{
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
  },[])

  useEffect(()=>{
    if (loaded){
      keypressListener()
    }
    return () => {
      document.removeEventListener("keypress", hit)
    }
  },[...holeList])

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
  

  // function clockPenalty(){
  //   console.log(hole1);
  //   if(hole1[1]>0){console.log('timeout')}
  // }
  
  let hole1timeout;

  const hole1Clock = ()=> hole1timeout = setTimeout(()=>{
    dispatch(hole1up(randomEnemy(tier)))
    // setTimeout(()=>{
    //   clockPenalty()
    // }, 5000)
  }, randomTime(1000,10000))
  const hole2Clock = ()=> setTimeout(()=>{
    dispatch(hole2up(randomEnemy(tier)))
  }, randomTime(1000,10000))
  const hole3Clock = ()=> setTimeout(()=>{
    dispatch(hole3up(randomEnemy(tier)))
  }, randomTime(1000,10000))
  const hole4Clock = ()=> setTimeout(()=>{
    dispatch(hole4up(randomEnemy(tier)))
  }, randomTime(1000,10000))
  const hole5Clock = ()=> setTimeout(()=>{
    dispatch(hole5up(randomEnemy(tier)))
  }, randomTime(1000,10000))
  const hole6Clock = ()=> setTimeout(()=>{
    dispatch(hole6up(randomEnemy(tier)))
  }, randomTime(1000,10000))
  const hole7Clock = ()=> setTimeout(()=>{
    dispatch(hole7up(randomEnemy(tier)))
  }, randomTime(1000,10000))
  const hole8Clock = ()=> setTimeout(()=>{
    dispatch(hole8up(randomEnemy(tier)))
  }, randomTime(1000,10000))
  const hole9Clock = ()=> setTimeout(()=>{
    dispatch(hole9up(randomEnemy(tier)))
  }, randomTime(1000,10000))

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

  function reward(){
    const yes = randomTime(1,3)===1
    if(yes){
      console.log("reward");
    } else {
      console.log("no reward");
    }
  }

  function keypressListener(){
    document.addEventListener("keypress", hit)
  }

  function hitEmptyHole(){
    console.log("Hit an empty hole");
    dispatch(clockDown(5))
    document.addEventListener("keypress", hit)
  }

  function hit(e){
    document.removeEventListener("keypress", hit)
    if (e.key===buttons[0]){

      if (hole1[1]>0){
        dispatch(hole1hit(attackValue))
        if((hole1[1]-attackValue)<=0){
          dispatch(scoreUp(hole1[2]))
          hole1Clock()
          reward()
        }
        if(defenseValue<hole1[0]){dispatch(healthDown(hole1[0]-defenseValue))}
      } else if (hole1[1]<=0){
        hitEmptyHole()
      }

    } else if (e.key===buttons[1]){
      if (hole2[1]>0){
        dispatch(hole2hit(attackValue))
        if((hole2[1]-attackValue)<=0){
          dispatch(scoreUp(hole2[2]))
          hole2Clock()
          reward()
        }
        if(defenseValue<hole2[0]){dispatch(healthDown(hole2[0]-defenseValue))}
      } else if (hole2[1]<=0){
        hitEmptyHole()
      }

    } else if (e.key===buttons[2]){
      if (hole3[1]>0){
        dispatch(hole3hit(attackValue))
        if((hole3[1]-attackValue)<=0){
          dispatch(scoreUp(hole3[2]))
          hole3Clock()
          reward()
        }
        if(defenseValue<hole3[0]){dispatch(healthDown(hole3[0]-defenseValue))}
      } else if (hole3[1]<=0){
        hitEmptyHole()
      }

    } else if (e.key===buttons[3]){
      if (hole4[1]>0){
        dispatch(hole4hit(attackValue))
        if((hole4[1]-attackValue)<=0){
          dispatch(scoreUp(hole4[2]))
          hole4Clock()
          reward()
        }
        if(defenseValue<hole4[0]){dispatch(healthDown(hole4[0]-defenseValue))}
      } else if (hole4[1]<=0){
        hitEmptyHole()
      }
      
    } else if (e.key===buttons[4]){
      if (hole5[1]>0){
        dispatch(hole5hit(attackValue))
        if((hole5[1]-attackValue)<=0){
          dispatch(scoreUp(hole5[2]))
          hole5Clock()
          reward()
        }
        if(defenseValue<hole5[0]){dispatch(healthDown(hole5[0]-defenseValue))}
      } else if (hole5[1]<=0){
        hitEmptyHole()
      }

    } else if (e.key===buttons[5]){
      if (hole6[1]>0){
        dispatch(hole6hit(attackValue))
        if((hole6[1]-attackValue)<=0){
          dispatch(scoreUp(hole6[2]))
          hole6Clock()
          reward()
        }
        if(defenseValue<hole6[0]){dispatch(healthDown(hole6[0]-defenseValue))}
      } else if (hole6[1]<=0){
        hitEmptyHole()
      }

    } else if (e.key===buttons[6]){
      if (hole7[1]>0){
        dispatch(hole7hit(attackValue))
        if((hole7[1]-attackValue)<=0){
          dispatch(scoreUp(hole7[2]))
          hole7Clock()
          reward()
        }
        if(defenseValue<hole7[0]){dispatch(healthDown(hole7[0]-defenseValue))}
      } else if (hole7[1]<=0){
        hitEmptyHole()
      }

    } else if (e.key===buttons[7]){
      if (hole8[1]>0){
        dispatch(hole8hit(attackValue))
        if((hole8[1]-attackValue)<=0){
          dispatch(scoreUp(hole8[2]))
          hole8Clock()
          reward()
        }
        if(defenseValue<hole8[0]){dispatch(healthDown(hole8[0]-defenseValue))}
      } else if (hole8[1]<=0){
        hitEmptyHole()
      }

    } else if (e.key===buttons[8]){
      if (hole9[1]>0){
        dispatch(hole9hit(attackValue))
        if((hole9[1]-attackValue)<=0){
          dispatch(scoreUp(hole9[2]))
          hole9Clock()
          reward()
        }
        if(defenseValue<hole9[0]){dispatch(healthDown(hole9[0]-defenseValue))}
      } else if (hole9[1]<=0){
        hitEmptyHole()
      }
    } else {
      console.log(e.key+' is not a valid button')
      document.addEventListener("keypress", hit)
    }
  }
  


  // useEffect(() => {
  //   const moleClock = setInterval(()=>{
  //     dispatch(hole1up([1,20]))
  //     console.log(hole1);
  //   }, randomTime(1000,5000))
  //   // return () => {
  //   //   clearInterval(moleClock)
  //   // }
  // },[])

  // useEffect(() => {
  //   const hitClock = setInterval(()=>{
  //     console.log(hole1);
  //     dispatch(hole1hit(1))
  //     console.log(hole1);
  //   }, 5000)
  //   return () => {
  //     clearInterval(hitClock)
  //   }
  // },[])



  function randomTime(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
  }



  function handleClick(e){
    console.log('click '+e.target.value);
  }


  // const holeRender = ()=>{
  //   const holeList = [hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9]
  //   const renderedHoles = []
  //   for (let i=1; i<10; i++){
  //     renderedHoles.append(
  //       <button className='hole' id={'hole'+i} value={'numpad'+i} onClick={handleClick}>{holeList[i-1][1]>0?holeList[i-1][0]+"/"+holeList[i-1][1]:''}</button>
  //     )
  //   }
  //   return renderedHoles;
  // }

  function handleBack(){
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
        emptyHoles()
        history.push('/highscores')
      } else {
        res.json().then(error => console.log(error.message))
      };
    })
  }

  function emptyHoles(){
    console.log('emptying');
    // document.removeEventListener("keypress", hit)
    // clearTimeout(hole1timeout)
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

  if(!user){return <></>}else{
    if(time<1 || health<1){
      return(
        <div className='home-body'><h1>Game Over</h1><h2>Score: {score}</h2><button onClick={handleBack}>Back</button><br/><br/><br/><br/>Click back to save your score to the leaderboard!</div>
      )
    }else{
      return(
        <div>
          <p className='settings-p'>Game On</p>
          <button className='hole' id='hole1' value='numpad1' onClick={handleClick}>{hole1[1]>0?hole1[0]+"/"+hole1[1]:''}</button>
          <button className='hole' id='hole2' value='numpad2' onClick={handleClick}>{hole2[1]>0?hole2[0]+"/"+hole2[1]:''}</button>
          <button className='hole' id='hole3' value='numpad3' onClick={handleClick}>{hole3[1]>0?hole3[0]+"/"+hole3[1]:''}</button>
          <button className='hole' id='hole4' value='numpad4' onClick={handleClick}>{hole4[1]>0?hole4[0]+"/"+hole4[1]:''}</button>
          <button className='hole' id='hole5' value='numpad5' onClick={handleClick}>{hole5[1]>0?hole5[0]+"/"+hole5[1]:''}</button>
          <button className='hole' id='hole6' value='numpad6' onClick={handleClick}>{hole6[1]>0?hole6[0]+"/"+hole6[1]:''}</button>
          <button className='hole' id='hole7' value='numpad7' onClick={handleClick}>{hole7[1]>0?hole7[0]+"/"+hole7[1]:''}</button>
          <button className='hole' id='hole8' value='numpad8' onClick={handleClick}>{hole8[1]>0?hole8[0]+"/"+hole8[1]:''}</button>
          <button className='hole' id='hole9' value='numpad9' onClick={handleClick}>{hole9[1]>0?hole9[0]+"/"+hole9[1]:''}</button>
          {/* {holeRender} */}
        </div>
      )
    }
  }
}

export default Play;