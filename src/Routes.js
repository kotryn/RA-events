import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Test from './components/Test'
import Login from './components/Login'

const Routes = () => (
    <main>
        <Switch>
            <Route exact path={'/test'} render={(props) => (
                <Test {...props} />
            )} />
        </Switch>
        <Switch>
            <Route exact path={'/login'} render={(props) => (
                <Login {...props} />
            )} />
        </Switch>
    </main>
)

export default Routes