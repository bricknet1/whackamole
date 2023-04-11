import { Route, Switch } from 'react-router-dom';
import {useEffect, useState, useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import {healthSet, attackValueSet, defenseValueSet, coinsSet} from './actions';
import {useDispatch} from 'react-redux';

import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Home from './components/Home.js';
import HighScores from './components/HighScores.js';
import HighScoresTopHud from './components/HighScoresTopHud.js';
import HighScoresBottomHud from './components/HighScoresBottomHud.js';
import Items from './components/Items.js';
import ItemsTopHud from './components/ItemsTopHud.js';
import ItemsBottomHud from './components/ItemsBottomHud.js';
import Play from './components/Play.js';
import PlayTopHud from './components/PlayTopHud.js';
import PlayBottomHud from './components/PlayBottomHud.js';
import Settings from './components/Settings.js';
import SettingsBottomHud from './components/SettingsBottomHud.js';

function App() {

  const [user, setUser] = useState(null);
  const [allItems, setAllItems] = useState([]);
  // const [item1, setItem1] = useState({attack:0, category:'', cost:0, defense:0, description:'', health:0, id:0, name:''});
  // const [item2, setItem2] = useState({attack:0, category:'', cost:0, defense:0, description:'', health:0, id:0, name:''});

  const history = useHistory();
  const dispatch = useDispatch();

  const userFetch = useCallback(fetchUser, [history]);

  useEffect(() => {
    fetchUser()
    fetchItems()
  },[userFetch])

  function fetchItems(){
    fetch('/items')
    .then(res => res.json())
    .then(data => setAllItems(data))
  }

  function fetchUser (){
    fetch('/authorized')
    .then(res => {
      if(res.ok){
        res.json()
        .then(data => {
          if(data===user){console.log("all good bro")}else{
            setUser(data)
            // setItem1(data.items.filter(item => item.id === data.item1)[0])
            // setItem2(data.items.filter(item => item.id === data.item2)[0])
          }
        })
      } else {
        setUser(null)
      }
    })
  }

  const setValues = (user) => {
    const item1 = user.items.filter(item => item.id === user.item1)[0]
    const item2 = user.items.filter(item => item.id === user.item2)[0]
    return(
      dispatch(healthSet(10+(item1?item1.health:0)+(item2?item2.health:0))),
      dispatch(attackValueSet(1+(item1?item1.attack:0)+(item2?item2.attack:0))),
      dispatch(defenseValueSet((item1?item1.defense:0)+(item2?item2.defense:0))),
      dispatch(coinsSet(user.coins))
    )
  }

  function handleLogout(){
    fetch('/logout', {
      method: "DELETE"
    })
    .then(res => {
      if(res.ok){
        setUser(null)
        history.push('/login')
      }
    })
  }

  console.log(user);

  return (
    <div className='app'>
      <div className='header'>
        <h1>Whack-a-mo-le</h1> 
      </div>
      {user?<div className='main-container'>
        <div className='top-hud'>
          <Switch>
            <Route path="/highscores" exact>
              <HighScoresTopHud/>
            </Route>
            <Route path="/items" exact>
              <ItemsTopHud user={user} allItems={allItems}/>
            </Route>
            <Route path="/play" exact>
              <PlayTopHud user={user}/>
            </Route>
            <Route path="/settings" exact>
              <HighScoresTopHud/>
            </Route>
          </Switch>
        </div>
        <div className='play-field'>
          <Switch>
            <Route path="/" exact>
              {user?<Home user={user} handleLogout={handleLogout}/>:<Login setUser={setUser}/>}
            </Route>
            <Route path="/highscores" exact>
              <HighScores/>
            </Route>
            <Route path="/items" exact>
              <Items user={user} setUser={setUser} allItems={allItems} setValues={setValues}/>
            </Route>
            <Route path="/play" exact>
              <Play user={user} setUser={setUser} setValues={setValues}/>
            </Route>
            <Route path="/settings" exact>
              <Settings user={user} setUser={setUser}/>
            </Route>
            <Route path="/login" exact>
              <Home user={user} handleLogout={handleLogout}/>
            </Route>
            <Route path="/signup" exact>
              <Home user={user} handleLogout={handleLogout}/>
            </Route>
            {/* <Route path="/login" exact>
              <Login setUser={setUser}/>
            </Route>
            <Route path="/signup" exact>
              <Signup setUser={setUser}/>
            </Route> */}
            <Route path="*">
              <h3>404 Not Found</h3>
            </Route>
          </Switch>
        </div>
        <div className='bottom-hud'>
        <Switch>
            <Route path="/highscores" exact>
              <HighScoresBottomHud user={user} handleLogout={handleLogout}/>
            </Route>
            <Route path="/items" exact>
              <ItemsBottomHud user={user} allItems={allItems} handleLogout={handleLogout}/>
            </Route>
            <Route path="/play" exact>
              <PlayBottomHud user={user}/>
            </Route>
            <Route path="/settings" exact>
              <SettingsBottomHud user={user} handleLogout={handleLogout}/>
            </Route>
          </Switch>
        </div>
      </div>
      :
      <div className='main-container'>
        <div className='top-hud'></div>
        <div className='play-field'>
          <Switch>
            <Route path="/" exact>
              <Login setUser={setUser} setValues={setValues}/>
            </Route>
            <Route path="/login" exact>
              <Login setUser={setUser} setValues={setValues}/>
            </Route>
            <Route path="/signup" exact>
              <Signup setUser={setUser} setValues={setValues}/>
            </Route>
            <Route path="*">
              <Login setUser={setUser} setValues={setValues}/>
            </Route>
          </Switch>
        </div>
        <div className='bottom-hud'></div>
      </div>
      }
    </div>
  );
}

export default App;
