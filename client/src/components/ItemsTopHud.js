import { useHistory } from 'react-router-dom';

function ItemsTopHud({user}){

  const history = useHistory();

  function handleBack(){
    history.push('/')
  }

  if(!user){return <></>}else{
    const item1 = user.items.filter(item => item.id === user.item1)[0]
    const item2 = user.items.filter(item => item.id === user.item2)[0]
    return(
      <div>
        <button className='button1' id='empty'></button>
        <button className='button2' id='empty'>Coins {user.coins}</button>
        <button className='button3' id='empty'>Health {10+(item1?item1.health:0)+(item2?item2.health:0)}</button>
        <button className='button4' onClick={handleBack}>Back</button>
      </div>
    )
  }
}

export default ItemsTopHud;