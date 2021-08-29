import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import KanbanBoard from '../pages/Board'
import LoginScreen from '../pages/Login'


const Routes = () => {
    return (

        <BrowserRouter>
            <Switch>

                <Route exact path='/'>
                    <LoginScreen />
                </Route>

                <Route path='/kanban-board'>
                    <KanbanBoard />
                </Route>


            </Switch>

        </BrowserRouter>

    )
}

export default Routes