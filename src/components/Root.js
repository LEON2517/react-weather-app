import React, {Component} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import AboutPage from './Routes/AboutPage'
import HomePage from './Routes/HomePage'


export default class Root extends Component {
    render() {
        return (
            <div>
                <div>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/about">About</Link></div>
                </div>
                <div>
                    <Switch>
                        <Route path="/about" component={AboutPage} exact/>
                        <Route path="/" component={HomePage} exact/>
                    </Switch>
                </div>
            </div>
        )
    }

}