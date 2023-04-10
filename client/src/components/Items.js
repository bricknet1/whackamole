import {useState} from 'react'
import {attackValueSet, defenseValueSet} from '../actions';
import {useSelector, useDispatch} from 'react-redux';

function Items({user, setUser, allItems, setValues}){

  const dispatch = useDispatch();
  const [itemsToDisplay, setItemsToDisplay] = useState([]);

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

  function handleEquip(e){
    const selected_item = parseInt(e.target.value)
    let slot = prompt("Equip as item 1 or item 2?\nPlease type either 1 or 2")
    if (slot !== "1" && slot !== "2"){slot = prompt("Equip as item 1 or item 2?\nYou must type either 1 or 2")}
    if (slot !== "1" && slot !== "2"){return alert("Item was not equipped")}
    let values
    if(slot === "1"){values = {"item1":selected_item}}
    else if(slot === "2"){values = {"item2":selected_item}}
    fetcher(values)
  }

  function handleUnequip(e){
    const selected_item = parseInt(e.target.value)
    let values
    if(selected_item===user['item1']){values = {"item1":null}}
    else if(selected_item===user['item2']){values = {"item2":null}}
    fetcher(values)
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