import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MovieCreationOutlinedIcon from '@material-ui/icons/MovieCreationOutlined';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 10,
    },
    title: {
        flexGrow: 1,
    },
    button: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.warning.main,
        }
    }
}));

function Footer() {
    const classes = useStyles();

    return (
            <AppBar position="static" className={classes.root}>
                <Container maxWidth='md'>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title} align="center">
                            <Button component={Link} to='/' className={classes.button}
                                color="inherit"
                                startIcon={<HomeOutlinedIcon />}
                            >
                                home
                            </Button>
                        </Typography>
                        <Typography variant="h6" className={classes.title} align="center">
                            <Button component={Link} to='/explore' className={classes.button}
                                color="inherit"
                                startIcon={<SearchIcon />}
                            >
                                Explore
                            </Button>
                        </Typography>
                        <Typography variant="h6" className={classes.title} align="center">
                            <Button component={Link} to='/movies' className={classes.button}
                                color="inherit"
                                startIcon={<MovieCreationOutlinedIcon />}
                            >
                                Movies
                            </Button>
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
    )
}

export default Footer;
