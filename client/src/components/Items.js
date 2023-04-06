import {useState} from 'react'

function Items({user, allItems}){

  const [itemsToDisplay, setItemsToDisplay] = useState([]);

  function handleMenu(e){
    const filtered = allItems.filter(item => item.category === e.target.value)
    setItemsToDisplay(filtered)
  }

  function handleBuy(e){
    console.log("buying item "+e.target.value);
  }

  function handleEquip(e){
    console.log("equipped item "+e.target.value);
  }

  function handleUnequip(e){
    console.log("unequipped item "+e.target.value);
  }

  const itemStore = itemsToDisplay.map((item, index) => {
    const {id, name, attack, defense, health, cost} = item;
    const owned = user['item_list'].includes(id);
    const equipped = user['item1']===id || user['item2']===id;
    return (
      <div key={index} className='item-store'>
        {owned?(equipped?<button className='storebutton' value={id} onClick={handleUnequip}>Unequip</button>:<button className='storebutton' value={id} onClick={handleEquip}>Equip</button>):<button className='storebutton' value={id} onClick={handleBuy}>{cost} Coins</button>}-{name}: {attack}/{defense}/{health}
      </div>
    )
  })

  return(
    <div>
      <h2>items</h2>
      <p>Attack/Defense/Health</p>
      <select onChange={handleMenu}>
        <option value="Menu" hidden>Select a Category</option>
        <option value="Pure Offense">Boost Offense</option>
        <option value="Pure Defense">Boost Defense</option>
        <option value="Pure Health">Boost Health</option>
        <option value="Offense and Defense">Boost Offense & Defense</option>
        <option value="Offense and Health">Boost Offense & Health</option>
        <option value="Defense and Health">Boost Defense & Health</option>
        <option value="All Stats Boosted">Boost All Stats</option>
      </select>
      {itemStore}
    </div>
  )
}

export default Items;