import { Route, Switch } from 'react-router-dom'
import {useEffect, useState} from 'react'

import Login from './components/Login.js';
import Signup from './components/Signup.js';

function App() {

  const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser()
    },[])

    const fetchUser = () => (
        fetch('/authorized')
        .then(res => {
            if(res.ok){
                res.json()
                .then(data => {
                    setUser(data)
                })
            } else {
                setUser(null)
            }
        })
    )


  return (
    <div className='app'>
      <div className='header'>
        <h1>Whackamolé</h1>
      </div>
      <div className='main-container'>
        <div className='top-hud'></div>
        <div className='play-field'>
          <Switch>
            <Route path="/login" exact>
              <Login setUser={setUser}/>
            </Route>
            <Route path="/signup" exact>
              <Signup setUser={setUser}/>
            </Route>
          </Switch>
        </div>
        <div className='bottom-hud'></div>
      </div>
    </div>
  );
}

export default App;
