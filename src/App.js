import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import GameWin from './pages/GameWin'

const App = () => (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/Casino" exact component={MainPage} />
          <Route path="/Casino/game" exact component={GameWin} />
        </Switch>
      </BrowserRouter>
    </>
)


export default App
