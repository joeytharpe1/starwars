import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import StarfieldAnimation from 'react-starfield-animation'

import Header from './HeaderComponent';
import Home from './HomeComponent';
import Explore from './ExploreComponent';
import Movies from './MoviesComponent';
import Footer from './FooterComponent';


import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

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
            <StarfieldAnimation
                id='starfield'
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                }}
            />
            <CssBaseline>
                <ThemeProvider theme={theme}>
                    <Header />
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route exact path='/Explore' component={Explore} />
                        <Route exact path='/movies' component={Movies} />
                        <Redirect to='/home' />
                    </Switch>
                    <Footer />
                </ThemeProvider>
            </CssBaseline>
        </>
    )
}

export default MainComponent;
