import { Route, Switch } from 'react-router-dom';
import {useEffect, useState, useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import {healthSet, attackValueSet, defenseValueSet, coinsSet, setEnemies} from './actions';
import {useDispatch} from 'react-redux';

import button3Sound from './sounds/button3.wav';

import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Home from './components/Home.js';
import HighScores from './components/HighScores.js';
import HighScoresTopHud from './components/HighScoresTopHud.js';
import HighScoresBottomHud from './components/HighScoresBottomHud.js';
import Items from './components/Items.js';
import ItemsTopHud from './components/ItemsTopHud.js';
import ItemsBottomHud from './components/ItemsBottomHud.js';
import PlayStart from './components/PlayStart.js';
import Play from './components/Play.js';
import PlayTopHud from './components/PlayTopHud.js';
import PlayBottomHud from './components/PlayBottomHud.js';
import Secret from './components/Secret';
import Settings from './components/Settings.js';
import SettingsBottomHud from './components/SettingsBottomHud.js';
import HowToPlay from './components/HowToPlay';

function App() {

  const [user, setUser] = useState(null);
  const [allItems, setAllItems] = useState([]);
  const [maxHealth, setMaxHealth] = useState(10);

  const history = useHistory();
  const dispatch = useDispatch();

  const button3SoundPlay = new Audio(button3Sound);

  // eslint-disable-next-line
  const userFetch = useCallback(fetchUser, [history]);

  useEffect(() => {
    fetchUser()
    fetchItems()
    // eslint-disable-next-line
  },[userFetch])

  function fetchItems(){
    fetch('/itemsdb')
    .then(res => res.json())
    .then(data => setAllItems(data))
  }

  function fetchUser (){
    fetch('/authorizeddb')
    .then(res => {
      if(res.ok){
        res.json()
        .then(data => {
          if(data===user){console.log("user matches data")}else{
            setUser(data)
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
      setMaxHealth(10+(item1?item1.health:0)+(item2?item2.health:0)),
      dispatch(attackValueSet(1+(item1?item1.attack:0)+(item2?item2.attack:0))),
      dispatch(defenseValueSet((item1?item1.defense:0)+(item2?item2.defense:0))),
      dispatch(coinsSet(user.coins))
    )
  }

  function enemySetter(){
    fetch('/enemiesdb')
    .then(res=>res.json())
    .then(data=>dispatch(setEnemies(data)))
  }

  function handleLogout(){
    button3SoundPlay.play()
    fetch('/logoutdb', {
      method: "DELETE"
    })
    .then(res => {
      if(res.ok){
        setUser(null)
        history.push('/login')
      }
    })
  }

  return (
    <div className='app'>
      <div className='header'>
        <h1>Whack-A-Mo-Le</h1> 
      </div>
      {user?<div className='main-container'>
        <div className='top-hud'>
          <Switch>
            <Route path="/highscores" exact>
              <HighScoresTopHud/>
            </Route>
            <Route path="/howtoplay" exact>
              <HighScoresTopHud/>
            </Route>
            <Route path="/items" exact>
              <ItemsTopHud user={user}/>
            </Route>
            <Route path="/play" exact>
              <PlayTopHud user={user} maxHealth={maxHealth}/>
            </Route>
            <Route path="/settings" exact>
              <HighScoresTopHud/>
            </Route>
            <Route path="/3122213" exact>
              <HighScoresTopHud/>
            </Route>
          </Switch>
        </div>
        <div className='play-field'>
          <Switch>
            <Route path="/" exact>
              {user?<Home user={user} handleLogout={handleLogout}/>:<Login setUser={setUser} setValues={setValues}/>}
            </Route>
            <Route path="/highscores" exact>
              <HighScores/>
            </Route>
            <Route path="/howtoplay" exact>
              <HowToPlay/>
            </Route>
            <Route path="/items" exact>
              <Items user={user} setUser={setUser} allItems={allItems} setValues={setValues}/>
            </Route>
            <Route path="/play" exact>
              <Play user={user} setUser={setUser} setValues={setValues} maxHealth={maxHealth} enemySetter={enemySetter}/>
            </Route>
            <Route path="/playstart" exact>
              <PlayStart user={user}/>
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
            <Route path="/3122213" exact>
              <Secret/>
            </Route>
            <Route path="*">
              <h3>404 Not Found</h3>
            </Route>
          </Switch>
        </div>
        <div className='bottom-hud'>
        <Switch>
            <Route path="/highscores" exact>
              <HighScoresBottomHud handleLogout={handleLogout}/>
            </Route>
            <Route path="/howtoplay" exact>
              <HighScoresBottomHud handleLogout={handleLogout}/>
            </Route>
            <Route path="/3122213" exact>
              <HighScoresBottomHud handleLogout={handleLogout}/>
            </Route>
            <Route path="/items" exact>
              <ItemsBottomHud user={user} handleLogout={handleLogout}/>
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
