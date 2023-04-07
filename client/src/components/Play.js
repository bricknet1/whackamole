function Play({user}){

  function handleClick(e){
    console.log('click '+e.target.value);
  }

  if(!user){return <></>}else{
    return(
      <div>
        <p className='settings-p'>Game On</p>
        <button className='hole' id='hole1' value='numpad1' onClick={handleClick}>{user.numpad1}</button>
        <button className='hole' id='hole2' value='numpad2' onClick={handleClick}>{user.numpad2}</button>
        <button className='hole' id='hole3' value='numpad3' onClick={handleClick}>{user.numpad3}</button>
        <button className='hole' id='hole4' value='numpad4' onClick={handleClick}>{user.numpad4}</button>
        <button className='hole' id='hole5' value='numpad5' onClick={handleClick}>{user.numpad5}</button>
        <button className='hole' id='hole6' value='numpad6' onClick={handleClick}>{user.numpad6}</button>
        <button className='hole' id='hole7' value='numpad7' onClick={handleClick}>{user.numpad7}</button>
        <button className='hole' id='hole8' value='numpad8' onClick={handleClick}>{user.numpad8}</button>
        <button className='hole' id='hole9' value='numpad9' onClick={handleClick}>{user.numpad9}</button>
      </div>
    )
  }
}

export default Play;