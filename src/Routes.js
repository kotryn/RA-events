import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Test from './components/Test'

const Routes = () => (
    <main>
        <Switch>
            <Route exact path={'/test'} render={(props) => (
                <Test {...props} />
            )} />
        </Switch>
    </main>
)

export default Routes