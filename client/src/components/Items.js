import {useState} from 'react'
import buttonSound from '../sounds/button.wav';

function Items({user, setUser, allItems, setValues}){

  const [itemsToDisplay, setItemsToDisplay] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const buttonSoundPlay = new Audio(buttonSound);

  function handleMenu(e){
    const filtered = allItems.filter(item => item.category === e.target.value)
    setItemsToDisplay(filtered)
  }

  function fetcher(values){
    fetch(`/users/${user['id']}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(res => {
      if (res.ok) {
        res.json().then(data => {
          setUser(data)
          setValues(data)
        })
      } else {
        res.json().then(error => console.log(error.message))
      };
    })
  }

  function handleBuy(e){
    
    const selected_item = parseInt(e.target.value)
    const cost = allItems.filter(item => item.id === selected_item)[0].cost
    const newCoins = (user['coins'])-cost
    if(newCoins<0){return alert('You do not have enough coins')}
    fetch('/useritems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"user_id":user['id'], "item_id":selected_item})
    })
    .then(res => {
      if (res.ok) {
        fetcher({"coins":newCoins})
      }
    })
  }

  function handleUnequip(e){
    buttonSoundPlay.play()
    const selected_item = parseInt(e.target.value)
    let values
    if(selected_item===user['item1']){values = {"item1":null}}
    else if(selected_item===user['item2']){values = {"item2":null}}
    fetcher(values)
  }

  function handleEquip(itemId){
    buttonSoundPlay.play()
    setSelectedItem(itemId);
  }

  const itemStore = itemsToDisplay.map((item, index) => {
    const {id, name, attack, defense, health, cost} = item;
    const owned = user['item_list'].includes(id);
    const equipped = user['item1']===id || user['item2']===id;
    function handleEquipClick(){
      handleEquip(id);
    }
    function handleModalButton(e){
      buttonSoundPlay.play()
      const slot = e.target.value;
      let values
      if(slot === "1"){values = {"item1":id}}
      else if(slot === "2"){values = {"item2":id}}
      fetcher(values)
      setSelectedItem(null)
    }
    return (
      <div key={index}>
        <div className='item-store'>
          {owned?(equipped?<button className='storebutton' value={id} onClick={handleUnequip}>Unequip</button>:<button className='storebutton' value={id} onClick={handleEquipClick}>Equip</button>):<button className='storebutton' value={id} onClick={handleBuy}>{cost} Coins</button>}-{name}: {attack}/{defense}/{health}
        </div>
        {selectedItem === id && (
        <div id={name} className="modal">
          <div className="modal-content">
            <span className="close" onClick={()=>setSelectedItem(null)}>&times;</span>
            <br/><p>Equip as item 1 or item 2?</p>
            <button className='modal-button1' value="1" onClick={handleModalButton}>1</button>
            <button className='modal-button2' value="2" onClick={handleModalButton}>2</button>
          </div>
        </div>
      )}
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