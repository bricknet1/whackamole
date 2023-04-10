import {useEffect, useState} from 'react';
import {hole1hit, hole1up, hole2hit, hole2up, hole3hit, hole3up, hole4hit, hole4up, hole5hit, hole5up, hole6hit, hole6up, hole7hit, hole7up, hole8hit, hole8up, hole9hit, hole9up, healthDown, clockUp, clockDown} from '../actions';
import {useSelector, useDispatch} from 'react-redux';

function Play({user}){
  
  const attackValue = useSelector(state => state.attackValue)
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
    holeBeginTest()
  },[])

  useEffect(()=>{
    if (loaded){
      keypressListener()
    }
  },[...holeList])

  function holeBeginTest(){
    dispatch(hole1up([1,1]))
    dispatch(hole2up([2,2]))
    dispatch(hole3up([3,3]))
    dispatch(hole4up([4,4]))
    dispatch(hole5up([5,5]))
    dispatch(hole6up([6,6]))
    dispatch(hole7up([7,7]))
    dispatch(hole8up([8,8]))
    dispatch(hole9up([9,9]))
    setLoaded(true)
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
        dispatch(healthDown(hole1[0]))
      } else if (hole1[1]<=0){
        hitEmptyHole()
      }

    } else if (e.key===buttons[1]){
      if (hole2[1]>0){
        dispatch(hole2hit(attackValue))
        dispatch(healthDown(hole2[0]))
      } else if (hole2[1]<=0){
        hitEmptyHole()
      }

    } else if (e.key===buttons[2]){
      if (hole3[1]>0){
        dispatch(hole3hit(attackValue))
        dispatch(healthDown(hole3[0]))
      } else if (hole3[1]<=0){
        hitEmptyHole()
      }

    } else if (e.key===buttons[3]){
      if (hole4[1]>0){
        dispatch(hole4hit(attackValue))
        dispatch(healthDown(hole4[0]))
      } else if (hole4[1]<=0){
        hitEmptyHole()
      }
      
    } else if (e.key===buttons[4]){
      if (hole5[1]>0){
        dispatch(hole5hit(attackValue))
        dispatch(healthDown(hole5[0]))
      } else if (hole5[1]<=0){
        hitEmptyHole()
      }

    } else if (e.key===buttons[5]){
      if (hole6[1]>0){
        dispatch(hole6hit(attackValue))
        dispatch(healthDown(hole6[0]))
      } else if (hole6[1]<=0){
        hitEmptyHole()
      }

    } else if (e.key===buttons[6]){
      if (hole7[1]>0){
        dispatch(hole7hit(attackValue))
        dispatch(healthDown(hole7[0]))
      } else if (hole7[1]<=0){
        hitEmptyHole()
      }

    } else if (e.key===buttons[7]){
      if (hole8[1]>0){
        dispatch(hole8hit(attackValue))
        dispatch(healthDown(hole8[0]))
      } else if (hole8[1]<=0){
        hitEmptyHole()
      }

    } else if (e.key===buttons[8]){
      console.log(hole9[1]===0);
      if (hole9[1]>0){
        dispatch(hole9hit(attackValue))
        dispatch(healthDown(hole9[0]))
      } else if (hole9[1]<=0){
        hitEmptyHole()
      }
    } else {
      console.log(e.key+' is not a valid button')
    }
  }
  
  // console.log(hole1);


  // function keyOutput(e){
  //   console.log(e);
  //   if (buttons.includes(e.key)){console.log('hooray')}else{
  //     // document.removeEventListener("keypress", keyOutput)
  //   }
  // }

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



  // function randomTime(min,max){
  //   return Math.floor(Math.random()*(max-min+1))+min;
  // }



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