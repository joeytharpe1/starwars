import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';
import Home from './HomeComponent';
import Explore from './ExploreComponent';
import Films from './FilmsComponent';
import Footer from './FooterComponent';


import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#fff',
        },
        warning: {
            main: '#ffdd00',
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
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default MainComponent;
