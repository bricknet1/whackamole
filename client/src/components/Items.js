import {useEffect, useState} from 'react'

function Items(){

  const [allItems, setAllItems] = useState([]);
  const [itemsToDisplay, setItemsToDisplay] = useState([]);

  useEffect(() => {
    fetch('/items')
    .then(res => res.json())
    .then(data => setAllItems(data))
  },[])

  function handleMenu(e){
    const filtered = allItems.filter(item => item.category === e.target.value)
    setItemsToDisplay(filtered)
  }
  console.log(itemsToDisplay);

  return(
    <div>
      <h2>items</h2>
      <select onChange={handleMenu}>
        <option value="Menu" hidden>Select a Category</option>
        <option value="Pure Offense">Offense Boost</option>
        <option value="Pure Defense">Defense Boost</option>
        <option value="Pure Health">Health Boost</option>
        <option value="Offense and Defense">Offense/Defense</option>
        <option value="Offense and Health">Offense/Health</option>
        <option value="Defense and Health">Defense/Health</option>
        <option value="All Stats Boosted">All Stats</option>
      </select>
    </div>
  )
}

export default Items;