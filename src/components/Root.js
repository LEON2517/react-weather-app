import React, {Component} from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import AboutPage from './Routes/AboutPage'
import HomePage from './Routes/HomePage'
import NotFoundPage from './Routes/NotFoundPage'


export default class Root extends Component {
    render() {
        return (
            <div>
                <div>
                    <div><Link to="/home">Home</Link></div>
                    <div><Link to="/about">About</Link></div>
                </div>
                <div>
                    <Switch>
                        <Redirect from="/" exact to="home" />
                        <Route path="/about" component={AboutPage} exact/>
                        <Route path="/home" component={HomePage} exact/>
                        <Route path="/error" render={() => <h1>Error</h1>}/>
                        <Route path="*" component={NotFoundPage} exact/>
                    </Switch>
                </div>
            </div>
        )
    }

}