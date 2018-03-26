import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Event from './components/Main'
import Login from './components/Login'

const Routes = () => (
    <main>
        <Switch>
            <Route exact path={'/'} render={(props) => (
                <Login {...props} />
            )} />
            <Redirect to={ "/"} />
        </Switch>
    </main>
)

export default Routes