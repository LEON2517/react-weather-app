import React, {Component} from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import AboutPage from './Routes/AboutPage/index.js'
import HomePage from './Routes/HomePage/index.js'

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
                        <Route path="/error" render={() => <h1 style={styles}>Error</h1>}/>
                        <Route path="*" render={() => <h1 style={styles}>Not Found</h1>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

let styles = {
    width: '230px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'

};