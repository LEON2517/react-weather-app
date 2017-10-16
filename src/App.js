import React, {Component} from 'react'
import Root from './components/Root'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Root />
            </MuiThemeProvider>
        )

    }
}