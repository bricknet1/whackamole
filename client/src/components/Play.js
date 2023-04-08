import {useEffect} from 'react';
import {hole1hit, hole1up, hole2hit, hole2up, hole3hit, hole3up, hole4hit, hole4up, hole5hit, hole5up, hole6hit, hole6up, hole7hit, hole7up, hole8hit, hole8up, hole9hit, hole9up} from '../actions';
import {useSelector, useDispatch} from 'react-redux';

function Play({user}){

  const attackValue = useSelector(state => state.attackValue)
  const hole1 = useSelector(state => state.hole1)
  // const hole2 = useSelector(state => state.hole2)
  // const hole3 = useSelector(state => state.hole3)
  // const hole4 = useSelector(state => state.hole4)
  // const hole5 = useSelector(state => state.hole5)
  // const hole6 = useSelector(state => state.hole6)
  // const hole7 = useSelector(state => state.hole7)
  // const hole8 = useSelector(state => state.hole8)
  // const hole9 = useSelector(state => state.hole9)
  const dispatch = useDispatch();

  const buttons = [user['numpad1'], user['numpad2'], user['numpad3'], user['numpad4'], user['numpad5'], user['numpad6'], user['numpad7'], user['numpad8'], user['numpad9']]

  function hit(e){
    if (e.key===buttons[0]){
      console.log(parseInt(attackValue));
      dispatch(hole1hit(parseInt(attackValue)))
    } else {
      console.log(e.key+' is not a valid button')
    }
  }
  useEffect(()=>{document.addEventListener("keypress", hit)},[])



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
  console.log(hole1);

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

  if(!user){return <></>}else{
    return(
      <div>
        <p className='settings-p'>Game On</p>
        <button className='hole' id='hole1' value='numpad1' onClick={handleClick}>{hole1[1]>0?hole1[0]+"/"+hole1[1]:''}</button>
        {/* <button className='hole' id='hole2' value='numpad2' onClick={handleClick}>{user.numpad2}</button>
        <button className='hole' id='hole3' value='numpad3' onClick={handleClick}>{user.numpad3}</button>
        <button className='hole' id='hole4' value='numpad4' onClick={handleClick}>{user.numpad4}</button>
        <button className='hole' id='hole5' value='numpad5' onClick={handleClick}>{user.numpad5}</button>
        <button className='hole' id='hole6' value='numpad6' onClick={handleClick}>{user.numpad6}</button>
        <button className='hole' id='hole7' value='numpad7' onClick={handleClick}>{user.numpad7}</button>
        <button className='hole' id='hole8' value='numpad8' onClick={handleClick}>{user.numpad8}</button>
        <button className='hole' id='hole9' value='numpad9' onClick={handleClick}>{user.numpad9}</button> */}
      </div>
    )
  }
}

export default Play;