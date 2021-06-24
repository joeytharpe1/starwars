import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';
import Home from './HomeComponent';
import Explore from './ExploreComponent';
import Films from './FilmsComponent';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#b71c1c',
        },
        secondary: {
            main: '#fff',
        },
        type: 'dark'
    },
    typography: {
        fontFamily: 'Garamond',
    },
    spacing: 8,

})

function MainComponent() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/Explore' component={Explore} />
                    <Route exact path='/films' component={Films} />
                    <Redirect to='/home' />
                </Switch>
            </ThemeProvider>
        </>
    )
}

export default MainComponent;
