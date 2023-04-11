import {useEffect, useState} from 'react';
import {hole1hit, hole1up, hole2hit, hole2up, hole3hit, hole3up, hole4hit, hole4up, hole5hit, hole5up, hole6hit, hole6up, hole7hit, hole7up, hole8hit, hole8up, hole9hit, hole9up, healthDown, clockDown} from '../actions';
import {useSelector, useDispatch} from 'react-redux';

function Play({user, setValues}){
  
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
  const dispatch = useDispatch();
  
  const buttons = [user['numpad1'], user['numpad2'], user['numpad3'], user['numpad4'], user['numpad5'], user['numpad6'], user['numpad7'], user['numpad8'], user['numpad9']]
  
  const holeList = [hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9]

  const [loaded, setLoaded] = useState(false);
  
  useEffect(()=>{
    setValues(user)
    holeBeginTest()
  },[])

  useEffect(()=>{
    if (loaded){
      keypressListener()
    }
    return () => {
      document.removeEventListener("keypress", hit)
    }
  },[...holeList])

  
  const hole1Clock = ()=> setTimeout(()=>{
    dispatch(hole1up([1,1]))
  }, randomTime(1000,10000))
  const hole2Clock = ()=> setTimeout(()=>{
    dispatch(hole2up([2,2]))
  }, randomTime(1000,10000))
  const hole3Clock = ()=> setTimeout(()=>{
    dispatch(hole3up([3,3]))
  }, randomTime(1000,10000))
  const hole4Clock = ()=> setTimeout(()=>{
    dispatch(hole4up([4,4]))
  }, randomTime(1000,10000))
  const hole5Clock = ()=> setTimeout(()=>{
    dispatch(hole5up([5,5]))
  }, randomTime(1000,10000))
  const hole6Clock = ()=> setTimeout(()=>{
    dispatch(hole6up([6,6]))
  }, randomTime(1000,10000))
  const hole7Clock = ()=> setTimeout(()=>{
    dispatch(hole7up([7,7]))
  }, randomTime(1000,10000))
  const hole8Clock = ()=> setTimeout(()=>{
    dispatch(hole8up([8,8]))
  }, randomTime(1000,10000))
  const hole9Clock = ()=> setTimeout(()=>{
    dispatch(hole9up([9,9]))
  }, randomTime(1000,10000))

  function holeBeginTest(){
    hole1Clock()
    hole2Clock()
    hole3Clock()
    hole4Clock()
    hole5Clock()
    hole6Clock()
    hole7Clock()
    hole8Clock()
    hole9Clock()
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

  if(!user){return <></>}else{
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

export default Play;