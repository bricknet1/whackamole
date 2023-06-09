import {useState} from 'react'
import buttonSound from '../sounds/button.wav';
import buySound from '../sounds/buy.wav';
import {scoreUp} from '../actions';
import {useDispatch} from 'react-redux';

function Items({user, setUser, allItems, setValues}){

  const dispatch = useDispatch();

  const [itemsToDisplay, setItemsToDisplay] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [canBuyPoints, setCanBuyPoints] = useState(true);

  const buttonSoundPlay = new Audio(buttonSound);
  const buySoundPlay = new Audio(buySound);

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
    if (selected_item < 50){
      fetch('/useritemsdb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"user_id":user['id'], "item_id":selected_item})
      })
      .then(res => {
        if (res.ok) {
          buySoundPlay.play()
          fetcher({"coins":newCoins})
          handleEquip(selected_item)
        }
      })
    } else if ((selected_item >= 50)&&(canBuyPoints)){
      setCanBuyPoints(false)
      fetch(`/users/${user['id']}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"coins":newCoins})
      })
      .then(res => {
        if (res.ok) {
          buySoundPlay.play()
          res.json().then(data => {
            setUser(data)
            setValues(data)
            dispatch(scoreUp(cost))
            setCanBuyPoints(true)
          })
        }
      })
    }
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
    setSelectedItem(itemId);
  }

  const itemStore = itemsToDisplay.map((item, index) => {
    const {id, name, attack, defense, health, cost} = item;
    const owned = user['item_list'].includes(id);
    const equipped = user['item1']===id || user['item2']===id;
    function handleEquipClick(){
      buttonSoundPlay.play()
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
      <select onChange={handleMenu}>
        <option value="Menu" hidden>Select a Category</option>
        <option value="Pure Offense">Boost Offense</option>
        <option value="Pure Defense">Boost Defense</option>
        <option value="Pure Health">Boost Health</option>
        <option value="Offense and Defense">Boost Offense & Defense</option>
        <option value="Offense and Health">Boost Offense & Health</option>
        <option value="Defense and Health">Boost Defense & Health</option>
        <option value="All Stats Boosted">Boost All Stats</option>
        <option value="Points">Points!!!!!</option>
      </select>
      {itemsToDisplay[0]?.id>49?<><p>Points apply to your next game.</p><p className='warning'>Warning: do not log out or refresh the page after buying points or they may be lost!</p></>:<p>Attack/Defense/Health</p>}
      {itemStore}
    </div>
  )
}

export default Items;