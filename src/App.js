import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import GameWin from './pages/GameWin'

const App = () => (
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/game" component={GameWin} />
      </Switch>
    </BrowserRouter>
)


export default App
