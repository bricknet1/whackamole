import { useHistory } from 'react-router-dom';
// import {useEffect} from 'react';
// import {useSelector, useDispatch} from 'react-redux';
// import {healthSet} from '../actions';

function Home({user, setValues, handleLogout}){
  
  // const health = useSelector(state => state.health)
  // const dispatch = useDispatch();
  // dispatch(healthSet(user.health))

  // useEffect(()=>{
  //   setValues(user)
  // },[])

  const history = useHistory();

  function handlePlay(){
    history.push('/play')
  }

  function handleItems(){
    history.push('/items')
  }

  function handleSettings(){
    history.push('/settings')
  }

  function handleHighScores(){
    history.push('/highscores')
  }



  // if(!user){return <h2>Loading...</h2>}
  // if(user){
    return(
      <div className='home-body'>
        <br/><h2>{user.username}</h2><br/><br/>
        <button onClick={handlePlay}>PLAY</button><br/><br/><br/>
        <button onClick={handleItems}>Items</button><br/><br/><br/>
        <button onClick={handleSettings}>Settings</button><br/><br/><br/>
        <button onClick={handleHighScores}>High Scores</button><br/><br/><br/>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    )
  // }
}

export default Home;