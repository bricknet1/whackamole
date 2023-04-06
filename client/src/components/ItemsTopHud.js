import { useHistory } from 'react-router-dom';

function ItemsTopHud({user, allItems, item1, item2}){

  const history = useHistory();

  function handleBack(){
    history.push('/')
  }

  if(!user){return <></>}
  return(
    <div>
      <button className='button1' id='empty'></button>
      <button className='button2' id='empty'>Coins {user.coins}</button>
      <button className='button3' id='empty'>Health 10</button>
      <button className='button4' onClick={handleBack}>Back</button>
    </div>
  )
}

export default ItemsTopHud;