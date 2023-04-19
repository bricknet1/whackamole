import {useEffect, useState} from 'react';

function HighScores(){

  const [highScores, setHighScores] = useState([])

  useEffect(() => {
    fetch('/highscoresdb')
    .then(res => res.json())
    .then(data => setHighScores(data))
  },[])

  const scoreList = highScores.map((hs, index)=>{
    const {score, user} = hs;
    const {username} = user;
    return (
      <p key={index} className='scorelist'>{index+1}: {username} {score} points</p>
    )
  })

  return(
    <div className='highscores'>
      <h2>high scores</h2>
      <br/>
      {scoreList}
    </div>
  )
}

export default HighScores;