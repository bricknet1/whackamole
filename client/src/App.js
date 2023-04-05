import { Route, Switch } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';

import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Home from './components/Home.js';
import HighScores from './components/HighScores.js';
import HighScoresTopHud from './components/HighScoresTopHud.js';
import HighScoresBottomHud from './components/HighScoresBottomHud.js';
import Items from './components/Items.js';
import Play from './components/Play.js';
import Settings from './components/Settings.js';

function App() {

  const [user, setUser] = useState(null);

  const history = useHistory();

  useEffect(() => {
    fetchUser()
  },[])

  const fetchUser = () => (
    fetch('/authorized')
    .then(res => {
      if(res.ok){
        res.json()
        .then(data => {
          if(data===user){console.log("all good bro")}else{setUser(data)}
        })
      } else {
        setUser(null)
      }
    })
  )

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
        <h1>Guac-a-mole</h1>
      </div>
      <div className='main-container'>
        <div className='top-hud'>
          <Switch>
            <Route path="/highscores" exact>
              <HighScoresTopHud/>
            </Route>
          </Switch>
        </div>
        <div className='play-field'>
          <Switch>
            <Route path="/" exact>
              {user?<Home user={user} setUser={setUser} handleLogout={handleLogout}/>:<Login setUser={setUser}/>}
            </Route>
            <Route path="/highscores" exact>
              <HighScores/>
            </Route>
            <Route path="/items" exact>
              <Items user={user}/>
            </Route>
            <Route path="/play" exact>
              <Play user={user}/>
            </Route>
            <Route path="/settings" exact>
              <Settings user={user}/>
            </Route>
            <Route path="/login" exact>
              <Login setUser={setUser}/>
            </Route>
            <Route path="/signup" exact>
              <Signup setUser={setUser}/>
            </Route>
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
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
