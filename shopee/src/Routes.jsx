import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { path } from './constants/path'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'

export default function Routes() {
  return (
    <Switch>
      <Route path={path.home} exact>
        <Home />
      </Route>
      <Route path={path.login}>
        <Login />
      </Route>
      <Route path={path.register}>
        <Register />
      </Route>
      <Route path={path.notFound}>
        <NotFound />
      </Route>
    </Switch>
  )
}
