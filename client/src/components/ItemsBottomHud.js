

function ItemsBottomHud({user, handleLogout}){
  
  if(!user){return <></>}else{
    const item1 = user.items.filter(item => item.id === user.item1)[0]
    const item2 = user.items.filter(item => item.id === user.item2)[0]
    return(
    <div>
      <button className='button1' id='empty-smallprint'>Attack: {1+(item1?item1.attack:0)+(item2?item2.attack:0)}<br/><br/>Defense: {(item1?item1.defense:0)+(item2?item2.defense:0)}</button>
      <button className='button2' id='empty-smallprint'>{item1?item1.name:"Nothing Equipped"}<br/><br/>{item1?`${item1.attack}/${item1.defense}/${item1.health}`:"0/0/0"}</button>
      <button className='button3' id='empty-smallprint'>{item2?item2.name:"Nothing Equipped"}<br/><br/>{item2?`${item2.attack}/${item2.defense}/${item2.health}`:"0/0/0"}</button>
      <button className='button4' onClick={handleLogout}>Log Out</button>
    </div>
    )
  }
}

export default ItemsBottomHud;