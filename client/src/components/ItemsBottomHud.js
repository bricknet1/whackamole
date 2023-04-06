import {useState} from 'react'

function ItemsBottomHud({user, allItems}){

  const item1 = allItems.filter(item => item.id === user.item1)[0]
  const item2 = allItems.filter(item => item.id === user.item2)[0]
  console.log(item1);

  if(!user){return <></>}
  return(
    <div>
      {/* <button className='button1' id='empty-smallprint'>Attack: {1+item1.attack+item2.attack}<br/><br/>Defense: {1+item1.defense+item2.defense}</button> */}
      {/* <button className='button2' id='empty-smallprint'>{item1.name}<br/><br/>{item1.attack}/{item1.defense}/{item1.health}</button>
      <button className='button3' id='empty-smallprint'>{item2.name}<br/><br/>{item2.attack}/{item2.defense}/{item2.health}</button> */}
      <button className='button4' >Log Out</button>
    </div>
  )
}

export default ItemsBottomHud;